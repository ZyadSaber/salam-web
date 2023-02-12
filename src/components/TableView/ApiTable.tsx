import { memo, useState, useCallback } from "react";
import Table from "./Table";
import useFetch from "../../hooks/useFetch";
import useTableControlsButtons from "./hooks/useTableControlsButtons"
import Notification from "../Notification/component";

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

    const { data, refresh } = useFetch({ link: api, fetchOnFirstRun: fetchOnFirstRun, params: params })
    const { setSelectedRow, onSaveAndInsertion, selectedRow, success } = useTableControlsButtons(postApi)
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
        refresh()
    }, [onSaveAndInsertion, refresh])

    const handleSelectedRow = (row: any) => {
        setRows(row)
        if (onSelectedRow) onSelectedRow(row)
    }

    return (
        <>
            <Notification
                Label="Alert"
                body={success}
            />
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