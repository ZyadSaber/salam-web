import React, { memo, useState, useMemo, useCallback, useEffect } from 'react';
import "./style.css";
import Button from "../button/button";
import IconButton from '../button/iconButton';
import { addionalButton } from "../../Types/general"

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
    onAction?: any;
    actionLabel?: string;
    onSelectedRow?: any;
    canPrint?: boolean;
    onPrint?: () => void;
    addionalButtons?: addionalButton[];
    onSave?: () => void;
    canSave?: boolean;
    width?: number | string;
}

interface column {
    title: string;
    width?: number | string;
    dataIndex?: any;
}

const Table = ({
    dataSource,
    rowkey = "rowkey",
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
    onSelectedRow,
    canPrint = false,
    onPrint,
    addionalButtons,
    onSave,
    canSave = false,
    width = "100%"
}: TableProps) => {
    //@ts-ignore
    const [rowSelected, setRowSelected] = useState()
    const handleSelectedRow = useCallback((item: any) => () => {
        onSelectedRow(item)
        setRowSelected(item)
    }, [onSelectedRow])

    return (
        <>
            <div className="view" style={{ width: width }}>
                <div className="section">
                    {children}
                    <div className="tools" hidden={hideTools}>
                        <div className="TableTools">
                            <IconButton
                                icon='fa-sharp fa-solid fa-plus'
                                onClick={onAdd}
                                disabled={canAdd}
                            />
                            <IconButton
                                icon='fa-sharp fa-solid fa-pen-clip'
                                onClick={onEdit}
                                disabled={canEdit}
                            />
                            <IconButton
                                icon='fa-sharp fa-solid fa-trash'
                                onClick={onDelete}
                                disabled={canDelete}
                            />
                            {addionalButtons && addionalButtons.map((button: addionalButton) => {
                                return (
                                    <IconButton
                                        icon={button.icon}
                                        onClick={button.onClick}
                                        disabled={button.disabled}
                                    />
                                )
                            })}
                            <IconButton
                                icon='fa-solid fa-floppy-disk'
                                onClick={onSave}
                                disabled={canSave}
                            />
                            <IconButton
                                icon='fa-solid fa-print'
                                onClick={onPrint}
                                disabled={canPrint}
                            />
                        </div>
                    </div>
                    <div className="table2 ">
                        <table className='table'>
                            <thead>
                                <tr className='table-secondary'>
                                    {columns.map((item: any) => {
                                        return (
                                            <th scope="col" style={{ width: item.width }}>
                                                {item.title}
                                            </th>
                                        )
                                    })}
                                    <th hidden={!actionColumn}>Action</th>
                                </tr>
                            </thead>
                        </table>
                        <div className="tbl-content">
                            <table className='table '>
                                <tbody>
                                    {dataSource?.map((item: any) => {
                                        return (
                                            <tr key={item[rowkey]} onClick={handleSelectedRow(item)}>
                                                {columns.map((column: any) => {
                                                    return (
                                                        <td className={`${rowSelected === item ? "table-success" : "table-light"} `} style={{ width: column.width }}>
                                                            {item[column.dataIndex]}
                                                        </td>
                                                    )
                                                })}
                                                <td className={`${rowSelected === item ? "table-success" : "table-light"} `} hidden={!actionColumn}>
                                                    <Button
                                                        label={actionLabel}
                                                        onClick={() => { onAction(item) }}
                                                    />
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table;
