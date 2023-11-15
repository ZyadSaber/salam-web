import React, { useState, useCallback, useMemo, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingOverLay from "@commons/loading-over-lay";
import { useBoundingClientRect } from "@commons/hooks";
import { Text } from "@commons/page-title";
import Flex from "@commons/flex";
import TableControlButtons from "./partials/TableControlButtons";
import generateFixedColumns from "./helpers/generateFixedColumns";
import TableHeader from "./partials/TableHeader";
import TableBody from "./partials/TableBody";
import createExcelFunction from "./helpers/createExcelFunction";
import { TableContainer, TableContentWrapper, StyledTable } from "./style";
import { TableProps } from "./interface";

const Table = ({
  dataSource,
  height = "300px",
  fixedHeight = "300px",
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
  actionColumn,
  actionLabel = "",
  actionWidth,
  onSelectedRow,
  label,
  canPrint = false,
  onPrint,
  additionalButtons,
  onSave,
  canSave = false,
  width = "100%",
  margin = "",
  padding = "",
  loading = false,
  onDoubleClick,
  selectedRowBackgroundColor = "lightBlue",
  addDisabled,
  editDisabled,
  deleteDisabled,
  saveDisabled,
  printDisabled,
  excelDisabled,
  overflowY,
}: TableProps) => {
  const { pathname } = useLocation();
  const [clickedRowKey, setClickedRow] = useState();

  useLayoutEffect(() => {
    if (loading) {
      setClickedRow(undefined);
    }
  }, [loading]);

  const onRowClick = useCallback(
    //@ts-ignore
    (currentRowKey, currentRecord, recordIndex) => () => {
      setClickedRow(currentRowKey);
      onSelectedRow?.(currentRecord, recordIndex);
    },
    [onSelectedRow]
  );

  const handleDouble = useCallback(
    //@ts-ignore
    (currentRowKey, currentRecord, recordIndex) => () => {
      setClickedRow(currentRowKey);
      onDoubleClick?.(currentRecord, recordIndex);
    },
    [onDoubleClick]
  );

  const pathName = pathname.replace("/", "");
  const excelFun = createExcelFunction({
    fileName: `${pathName} ${new Date().toUTCString()}.xlsx`,
    dataSource: dataSource,
    columns: columns,
  });

  const tableColumnsLength = columns.length;

  const [elementRef, rect] = useBoundingClientRect([
    tableColumnsLength,
    loading,
  ]);

  const containerWidthNumber = rect?.width ?? 200;

  const { adjustedColumns } = useMemo(
    () =>
      generateFixedColumns({
        containerWidthNumber,
        columnsFromProps: columns,
      }),
    [containerWidthNumber, columns]
  );

  return (
    <>
      <TableControlButtons
        hideTools={hideTools}
        canAdd={canAdd}
        canEdit={canEdit}
        canDelete={canDelete}
        canSave={canSave}
        canPrint={canPrint}
        canExcel={canExcel}
        onAdd={onAdd}
        onEdit={onEdit}
        onDelete={onDelete}
        onSave={onSave}
        onPrint={onPrint}
        onExcel={excelFun}
        addDisabled={addDisabled}
        editDisabled={editDisabled || !clickedRowKey}
        deleteDisabled={deleteDisabled || !clickedRowKey}
        saveDisabled={saveDisabled}
        printDisabled={printDisabled}
        excelDisabled={excelDisabled}
        additionalButtons={additionalButtons}
      />
      <TableContainer
        width={width}
        padding={padding}
        margin={margin}
        ref={elementRef}
      >
        <LoadingOverLay visible={loading} />
        <TableContentWrapper
          height={height}
          overflowY={overflowY}
          fixedHeight={fixedHeight}
        >
          <StyledTable cellSpacing={0}>
            <TableHeader
              columns={adjustedColumns}
              actionColumn={actionColumn}
              actionLabel={actionLabel}
              actionWidth={actionWidth}
            />

            <TableBody
              columns={adjustedColumns}
              actionColumn={actionColumn}
              dataSource={dataSource}
              rowKey={rowKey}
              handleSelectedRow={onRowClick}
              onDoubleClick={handleDouble}
              selectedRowBackgroundColor={selectedRowBackgroundColor}
              clickedRowKey={clickedRowKey}
            />
          </StyledTable>
          {(!Array.isArray(dataSource) || dataSource.length === 0) && (
            <Flex width="100%" justifyContent="center" height="30%">
              <Text title="ntd" color="red" fontWeight="bold" />
            </Flex>
          )}
        </TableContentWrapper>
      </TableContainer>
    </>
  );
};

export default Table;
