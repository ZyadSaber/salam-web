import React, {
  memo,
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef,
  useMemo,
} from "react";
import PdfViewer, { usePdfViewerControl } from "@commons/pdf-viewer";
import { useFetch, useEffectTimeOut } from "@commons/hooks";
import Modal from "@commons/modal";
import ConfirmationModal from "@commons/confirmation-modal";
import Table from "./Table";
import useTableControlsButtons from "./hooks/useTableControlsButtons";
import { TableWithApiProps } from "./interface";

//TODO: change the ref type

const TableWithApi = (
  {
    api,
    postApi,
    columns,
    ModalContent,
    onClick,
    fetchOnFirstRun = false,
    params,
    checkForParams = false,
    modalWidth = "60%",
    printProps,
    reportName,
    ...tableProps
  }: TableWithApiProps,
  ref: any
) => {
  const { data, runFetch, loading, setData, resetData } = useFetch({
    link: api,
    fetchOnFirstRun: fetchOnFirstRun,
    params: params,
    checkForParams: checkForParams,
  });
  const { onSaveAndInsertion } = useTableControlsButtons({
    api: postApi,
    runFetch: runFetch,
  });
  const { PDFRef, handleOpenModal } = usePdfViewerControl();
  const [selectedRow, setSelectedRow] = useState({});
  const [modal, setModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const handleAdd = useCallback(() => {
    setSelectedRow({ query_status: "n" });
    setModal(true);
  }, [setSelectedRow]);
  const handleEdit = useCallback(() => {
    setSelectedRow({ ...selectedRow, query_status: "u" });
    setModal(true);
  }, [selectedRow, setSelectedRow]);
  const handleDelete = () => {
    onSaveAndInsertion({ ...selectedRow, query_status: "d" });
  };

  const handleCloseModal = useCallback(() => {
    setModal(false);
  }, []);

  const handleCloseConfirmModal = useCallback(() => {
    setConfirmModal(false);
  }, []);
  const handleOpenConfirmModal = useCallback(() => {
    setConfirmModal(true);
  }, []);

  const handleSelectedRow = (row: any) => {
    setSelectedRow(row);
    if (onClick) onClick(row);
  };

  const foundDataSource = useMemo(() => data?.data, [data?.data]);

  const handlePrint = useCallback(() => {
    selectedRow && handleOpenModal();
  }, [handleOpenModal, selectedRow]);

  useImperativeHandle(ref, () => ({
    runFetch,
    setTableData: setData,
    resetTableData: resetData,
    getCurrentDataSource: () => foundDataSource,
  }));

  useEffectTimeOut(() => {
    fetchOnFirstRun &&
    runFetch();
  }, 30000);

  return (
    <>
      {ModalContent && (
        <Modal
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
      )}
      <ConfirmationModal
        visible={confirmModal}
        onConfirm={handleDelete}
        onClose={handleCloseConfirmModal}
      />
      <PdfViewer ref={PDFRef} reportName={reportName} params={printProps} />
      <Table
        dataSource={data?.data}
        columns={columns}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onPrint={handlePrint}
        onDelete={handleOpenConfirmModal}
        onSelectedRow={handleSelectedRow}
        loading={loading}
        {...tableProps}
      ></Table>
    </>
  );
};
export default memo(forwardRef(TableWithApi));
