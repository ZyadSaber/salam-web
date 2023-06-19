import React, { memo, useState, useCallback } from "react";
import Table from "./Table";
import { useFetch } from "@commons/hooks"
import Modal from "@commons/modal";
import useTableControlsButtons from "./hooks/useTableControlsButtons";
import { TableWithApiProps } from "./interface"

const TableWithApi = ({
    api,
    postApi,
    columns,
    ModalContent,
    onClick,
    fetchOnFirstRun = false,
    params,
    ...props
}: TableWithApiProps) => {
    const { data, runFetch, loading } = useFetch({ link: api, fetchOnFirstRun: fetchOnFirstRun, params: params })
    const { onSaveAndInsertion } = useTableControlsButtons({ api: postApi, runFetch: runFetch })
    const [selectedRow, setSelectedRow] = useState({})
    const [modal, setModal] = useState(false)
    const handleAdd = useCallback(() => {
        setSelectedRow({ query_status: "n" })
        setModal(true)
    }, [setSelectedRow])
    const handleEdit = useCallback(() => {
        setSelectedRow({ ...selectedRow, query_status: "u" })
        setModal(true)
    }, [selectedRow, setSelectedRow])
    const handleDelete = () => {
        onSaveAndInsertion({ ...selectedRow, query_status: "d" })
    }

    const handleCloseModal = useCallback(() => {
        setModal(false)
    }, [])


    const handleSelectedRow = (row: any) => {
        setSelectedRow(row)
        if (onClick) onClick(row)
    }

    return (
        <>
            {ModalContent && <Modal
                visible={modal}
                onClose={handleCloseModal}
                hideCloseButton
                hideSaveButton
                label="dtls"
            >
                <ModalContent
                    onClose={handleCloseModal}
                    selectedRow={selectedRow}
                    refreshTable={runFetch}
                />
            </Modal>
            }
            <Table
                dataSource={data?.data}
                columns={columns}
                onAdd={handleAdd}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onSelectedRow={handleSelectedRow}
                loading={loading}
                {...props}
            >
            </Table>

        </>
    )
}

export default memo(TableWithApi)