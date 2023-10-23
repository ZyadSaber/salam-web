import React,
{
    memo,
    useState,
    useCallback,
    useImperativeHandle,
    forwardRef,
    useMemo
} from "react";
import Table from "./Table";
import { useFetch } from "@commons/hooks"
import Modal from "@commons/modal";
import useTableControlsButtons from "./hooks/useTableControlsButtons";
import { TableWithApiProps } from "./interface"

//TODO: change the ref type

const TableWithApi = ({
    api,
    postApi,
    columns,
    ModalContent,
    onClick,
    fetchOnFirstRun = false,
    params,
    checkForParams = false,
    modalWidth = "60%",
    ...tableProps
}: TableWithApiProps,
    ref: any
) => {
    const { data, runFetch, loading, setData, resetData } = useFetch({ link: api, fetchOnFirstRun: fetchOnFirstRun, params: params, checkForParams: checkForParams })
    const { onSaveAndInsertion } = useTableControlsButtons({ api: postApi, runFetch: runFetch })
    const [selectedRow, setSelectedRow] = useState({})
    const [modal, setModal] = useState(false);
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
    };

    const foundDataSource = useMemo(
        () => data?.data,
        [data?.data]
      );

    useImperativeHandle(ref, () => ({
        runFetch,
        setTableData: setData,
        resetTableData: resetData,
        getCurrentDataSource: () => foundDataSource,
    }));

    return (
        <>
            {ModalContent && <Modal
                visible={modal}
                onClose={handleCloseModal}
                hideCloseButton
                hideSaveButton
                label="dtls"
                noFooter
                width={modalWidth}
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
                {...tableProps}
            >
            </Table>

        </>
    )
}
export default memo(forwardRef(TableWithApi))