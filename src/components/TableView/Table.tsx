import React, { memo, useState, useMemo, useCallback, useEffect } from 'react';
import "./style.css";
import Button from "../button/button";

interface TableProps {
    rowkey?: string | number;
    dataSource?: any[];
    columns: column[];
    title?: string;
    canEdit?: boolean;
    canAdd?: boolean;
    canDelete?: boolean;
    hideTools?: boolean;
    onAdd?: () => void;
    onEdit?: () => void | any;
    onDelete?: () => void;
    children?: any;
    Form?: any;
    actionColumn?: boolean;
    onAction?: () => void;
    actionLabel?: string;
    onSelectedRow?: any
}

interface column {
    title: string,
    width?: number,
    dataIndex?: string,
}

const Table = ({
    dataSource,
    rowkey = "id",
    columns,
    hideTools = true,
    canEdit = false,
    canAdd = false,
    canDelete = false,
    onAdd,
    onEdit,
    onDelete,
    children,
    actionColumn = false,
    onAction,
    actionLabel = "",
    onSelectedRow
}: TableProps) => {
    //@ts-ignore
    const [rowSelected, setRowSelected] = useState()

    const handleSelectedRow = useCallback((item: any) => () => {
        onSelectedRow(item)
        setRowSelected(item)
    }, [onSelectedRow])


    return (
        <>
            <div className="Table">
                <section>
                    <div className="head">
                        {children}
                    </div>
                    <div className="tools" hidden={hideTools}>
                        <div className="TableTools">
                            <button disabled={!canAdd} onClick={onAdd} >
                                <i className="fa-sharp fa-solid fa-plus"></i>
                            </button>
                            <button disabled={!canEdit} onClick={onEdit} >
                                <i className="fa-sharp fa-solid fa-pen-clip"></i>
                            </button>
                            <button disabled={!canDelete} onClick={onDelete} >
                                <i className="fa-sharp fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                    <div className="tbl-header">
                        <table>
                            <thead>
                                <tr>
                                    {columns.map((item: any) => {
                                        return (
                                            <th style={{ width: `${item.width}%` }}>
                                                {item.title}
                                            </th>
                                        )
                                    })}
                                    <th hidden={!actionColumn}>Action</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="tbl-content">
                        <table>
                            <tbody>
                                {dataSource?.map((item: any) => {
                                    return (
                                        <tr key={item[rowkey]} onClick={handleSelectedRow(item)}>
                                            {columns.map((column: any) => {
                                                return (
                                                    <td className={`${rowSelected === item && "selectedRow"}`} style={{ width: `${column.width}%` }}>
                                                        {item[column.dataIndex]}
                                                    </td>
                                                )
                                            })}
                                            <td hidden={!actionColumn}>
                                                <Button
                                                    label={actionLabel}
                                                    onClick={onAction}
                                                />
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div >
        </>
    )
}

export default Table;
