import React, { useState, useCallback, useRef } from 'react';
import { Button, IconButton } from "@commons/button";
import { useLocation } from 'react-router-dom';
import * as XLSX from "xlsx";
import { useTranslation } from 'react-i18next';
import ReactToPrint from 'react-to-print';
import {
    Table as ChakraTable,
    Thead,
    Tbody,
    // Tfoot,
    Text,
    Box,
    Tr,
    Th,
    Td,
    TableContainer,
    Skeleton
} from '@chakra-ui/react'
import Flex from "@commons/flex";
import { TableProps, additionalButtonsType } from "./interface";


const Table = ({
    dataSource,
    height = "300px",
    rowKey = "rowKey",
    columns,
    hideTools = true,
    canEdit = false,
    canAdd = false,
    canDelete = false,
    canExcel = false,
    onAdd,
    onEdit,
    onDelete,
    actionColumn = false,
    onAction,
    actionLabel = "",
    onSelectedRow,
    canPrint = false,
    onPrint,
    additionalButtons,
    onSave,
    canSave = false,
    width = "100%",
    margin = "",
    padding = "",
    loading = false,
    onDoubleClick = () => { }
}: TableProps) => {
    const { pathname } = useLocation()
    const { t } = useTranslation()
    const [rowSelected, setRowSelected] = useState()
    const handleSelectedRow = useCallback((item: any) => () => {
        onSelectedRow(item)
        setRowSelected(item)
    }, [onSelectedRow])

    const onExcel = useCallback(() => {
        const pathName = pathname.replace("/", "")
        const wb = XLSX.utils.book_new(),
            //@ts-ignore
            ws = XLSX.utils.json_to_sheet(dataSource)
        XLSX.utils.book_append_sheet(wb, ws, pathName)
        XLSX.writeFile(wb, `${pathName} ${new Date().toUTCString()}.xlsx`)
    }, [dataSource, pathname])

    const componentRef = useRef();

    return (
        <>
            <TableContainer width={width} padding={padding} margin={margin}>
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
                        hidden={!canAdd}
                    />
                    <IconButton
                        icon='fa-sharp fa-solid fa-pen-clip'
                        onClick={onEdit}
                        hidden={!canEdit}
                        disabled={!rowSelected}
                    />
                    <IconButton
                        icon='fa-sharp fa-solid fa-trash'
                        onClick={onDelete}
                        hidden={!canDelete}
                        disabled={!rowSelected}
                    />
                    {additionalButtons && additionalButtons.map((button: additionalButtonsType) => {
                        return (
                            <IconButton
                                icon={button.icon}
                                onClick={button.onClick}
                                disabled={button.disabled}
                                hidden={false}
                            />
                        )
                    })}
                    <IconButton
                        icon='fa-solid fa-floppy-disk'
                        onClick={onSave}
                        hidden={!canSave}
                        disabled={!canSave}
                    />
                    <ReactToPrint
                        trigger={() => <IconButton
                            icon='fa-solid fa-print'
                            hidden={!canPrint}
                            disabled={!canPrint}
                        />}
                        //@ts-ignore
                        content={() => {
                            return (
                                componentRef.current
                            )
                        }}
                        documentTitle="dd"
                    />
                    <IconButton
                        icon='fa-sharp fa-regular fa-file-excel'
                        onClick={onExcel}
                        hidden={!canExcel}
                        disabled={!canExcel}
                    />
                </Flex>
                <Skeleton isLoaded={!loading} fadeDuration={0} >
                    <Box overflowY="auto" height={height}>
                        <ChakraTable
                            //@ts-ignore
                            ref={componentRef}
                        >
                            <Thead top={0} position="sticky" bgColor="#3edae6">
                                <Tr>
                                    {columns.map((item: any) => {
                                        return (
                                            <Th maxWidth={item.width} minWidth={item.width}>
                                                {t(item.title)}
                                            </Th>
                                        )
                                    })}
                                    <Th hidden={!actionColumn}>{t("actn")}</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {dataSource?.map((item: any) => {
                                    return (
                                        <Tr key={item[rowKey]} onClick={handleSelectedRow(item)} onDoubleClick={onDoubleClick} background={`${rowSelected === item ? "#dbffbf" : ""}`} >
                                            {columns.map((column: any) => {
                                                return (
                                                    <Td maxWidth={column.width} minWidth={column.width}>
                                                        {item[column.dataIndex]}
                                                    </Td>
                                                )
                                            })}
                                            <Td hidden={!actionColumn}>
                                                <Button
                                                    label={actionLabel}
                                                    onClick={() => { onAction(item) }}
                                                />
                                            </Td>
                                        </Tr>
                                    )
                                })}
                            </Tbody>

                            {/* <Tfoot>
                        <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Tfoot> */}

                        </ChakraTable>

                        {!Array.isArray(dataSource) || dataSource.length === 0 && !loading ? <Flex justifyContent='center' width='100%'>
                            <Text as='b' fontSize='md' color='red'>No Data</Text>
                        </Flex> : <></>}
                    </Box>
                </Skeleton>
            </TableContainer>
        </>
    )
}

export default Table;