import { memo, useState, useCallback } from "react";
import Table from "./Table";
import useFetch from "../../hooks/useFetch";
import useTableControlsButtons from "./hooks/useTableControlsButtons"

interface ApiTableProps {
    api: string;
    postApi?: string;
    columns: {
        title: string,
        dataIndex: string,
        width: number
    }[];
    hideTools?: boolean;
    canAdd?: boolean;
    canEdit?: boolean;
    canDelete?: boolean;
    rowKey: string;
    Modal?: any
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
    Modal
}: ApiTableProps) => {

    const { data } = useFetch(api)
    const { setSelectedRow, onSaveAndInsertion, selectedRow } = useTableControlsButtons(postApi)
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
    }, [onSaveAndInsertion])

    return (
        <>
            <Modal
                visible={modal}
                onOK={handleSaveModal}
                onClose={handleCloseModal}
                selectedRow={selectedRow}
                setSelectedRow={setSelectedRow}
            />
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
                onSelectedRow={setRows}
            >
            </Table>

        </>
    )
}

export default memo(ApiTable)