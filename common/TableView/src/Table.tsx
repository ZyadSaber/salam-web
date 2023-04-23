import React, { useState, useCallback } from 'react';
import "./style.css";
import { Button, IconButton } from "@commons/button";
import { TableProps } from "./interfece";
import { useTranslation } from 'react-i18next';
import Flex from "@commons/flex";


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
    actionColumn = false,
    onAction,
    actionLabel = "",
    onSelectedRow,
    canPrint = false,
    onPrint,
    addionalButtons,
    onSave,
    canSave = false,
    width = "100%",
    margin = "",
    padding = ""
}: TableProps) => {
    const { t } = useTranslation()
    const [rowSelected, setRowSelected] = useState()
    const handleSelectedRow = useCallback((item: any) => () => {
        onSelectedRow(item)
        setRowSelected(item)
    }, [onSelectedRow])

    return (
        <>
            <div style={{ width: width, padding: padding, margin: margin }}>
                <Flex
                    width='100%'
                    padding='0'
                    margin='5px 0'
                    justifyContent='center'
                    hidden={hideTools}
                >
                    <IconButton
                        icon='fa-sharp fa-solid fa-plus'
                        onClick={onAdd}
                        hidden={canAdd}
                    />
                    <IconButton
                        icon='fa-sharp fa-solid fa-pen-clip'
                        onClick={onEdit}
                        hidden={canEdit}
                        disabled={!rowSelected}
                    />
                    <IconButton
                        icon='fa-sharp fa-solid fa-trash'
                        onClick={onDelete}
                        hidden={canDelete}
                        disabled={!rowSelected}
                    />
                    {addionalButtons && addionalButtons.map((button: any[]) => {
                        return (
                            <IconButton
                                //@ts-ignore
                                icon={button.icon}
                                //@ts-ignore
                                onClick={button.onClick}
                                //@ts-ignore
                                hidden={button.hidden}
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
                </Flex>
                <table className='table m-0'>
                    <thead>
                        <tr className='table-secondary'>
                            {columns.map((item: any) => {
                                return (
                                    <th scope="col" style={{ width: item.width }}>
                                        {t(item.title)}
                                    </th>
                                )
                            })}
                            <th hidden={!actionColumn}>{t("actn")}</th>
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
        </>
    )
}

export default Table;
