import React, { memo, useState, useCallback } from "react";
import Table from "./Table";
import { useFetch } from "@commons/hooks"
import useTableControlsButtons from "./hooks/useTableControlsButtons"

interface ApiTableProps {
    api: string;
    postApi?: string;
    columns: {
        title: string,
        dataIndex: string,
        width: number | string
    }[];
    hideTools?: boolean;
    canAdd?: boolean;
    canEdit?: boolean;
    canDelete?: boolean;
    rowKey: string;
    Modal?: any;
    width?: number | string;
    onSelectedRow?: any;
    fetchOnFirstRun?: boolean;
    refreshAfter?: number;
    params?: any;
}

const ApiTable = ({
    api,
    postApi,
    columns,
    hideTools,
    canAdd,
    canEdit,
    canDelete,
    rowKey,
    Modal,
    width,
    onSelectedRow,
    fetchOnFirstRun = false,
    params
}: ApiTableProps) => {
    const { data, runFetch } = useFetch({ link: api, fetchOnFirstRun: fetchOnFirstRun, params: params })
    const { setSelectedRow, onSaveAndInsertion, selectedRow } = useTableControlsButtons({ api: postApi })
    const [rows, setRows] = useState({})
    const [modal, setModal] = useState(false)
    const handleAdd = useCallback(() => {
        setSelectedRow({ query_status: "n" })
        setModal(true)
    }, [setSelectedRow])
    const handleEdit = useCallback(() => {
        setSelectedRow({ ...rows, query_status: "u" })
        setModal(true)
    }, [rows, setSelectedRow])
    const handleDelete = () => {
        setSelectedRow({ ...rows, query_status: "d" })
        onSaveAndInsertion()
    }

    const handleCloseModal = useCallback(() => {
        setModal(false)
    }, [])

    const handleSaveModal = useCallback(() => {
        setModal(false)
        onSaveAndInsertion()
        runFetch()
    }, [onSaveAndInsertion, runFetch])

    const handleSelectedRow = (row: any) => {
        setRows(row)
        if (onSelectedRow) onSelectedRow(row)
    }

    return (
        <>
            {Modal && <Modal
                visible={modal}
                onOK={handleSaveModal}
                onClose={handleCloseModal}
                selectedRow={selectedRow}
                setSelectedRow={setSelectedRow}
            />}
            <Table
                dataSource={data}
                columns={columns}
                hideTools={hideTools}
                canAdd={canAdd}
                canEdit={canEdit}
                canDelete={canDelete}
                rowkey={rowKey}
                onAdd={handleAdd}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onSelectedRow={handleSelectedRow}
                width={width}
            >
            </Table>

        </>
    )
}

export default memo(ApiTable)