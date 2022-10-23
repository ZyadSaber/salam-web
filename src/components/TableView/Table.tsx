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
    actionLabel?: string
}

interface column {
    title: string,
    width?: number,
    dataIndex?: string,
}

const Table = ({
    // dataSource,
    rowkey,
    columns,
    title,
    hideTools = true,
    canEdit = false,
    canAdd = false,
    canDelete = false,
    onAdd,
    onEdit,
    onDelete,
    children,
    Form,
    actionColumn = false,
    onAction,
    actionLabel = ""
}: TableProps) => {

    const [selectdRow, setSelectedRow] = useState({})

    const handleSelectRow = useCallback((setSelectedDataRow: any) => () => {
        setSelectedRow(setSelectedDataRow)
    }, [])

    return (
        <>
            <div className="Table">
                <section>
                    <div className="head">
                        {Form}
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
                                            <th>

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
                                {children.map(
                                    //@ts-ignore
                                    column => {
                                        return (
                                            <tr onClick={handleSelectRow(column.props.children)}>
                                                {column.props.children}
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
