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
import TablePagination from "./partials/TablePagination";
import FloatingLabelsTotalCells from "./partials/FloatingLabelsTotalCells";
import createExcelFunction from "./helpers/createExcelFunction";
import { TableContainer, TableContentWrapper, StyledTable } from "./style";
import { TableProps } from "./interface";

const Table = ({
  dataSource,
  height = "300px",
  fixedHeight,
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
  margin,
  padding,
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
  noPagination = true,
  useFloatingLabelsTotalCells,
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
    <button hidden>dd</button>
      <TableContainer
        width={width}
        padding={padding}
        margin={margin}
        ref={elementRef}
      >
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
          { Array.isArray(dataSource) &&
          dataSource.length !== 0 && useFloatingLabelsTotalCells && (
            <tfoot>
              <FloatingLabelsTotalCells dataSource={dataSource} columns={adjustedColumns} />
            </tfoot>
          )}
        </TableContentWrapper>
        {Array.isArray(dataSource) &&
          dataSource.length !== 0 &&
          !noPagination && <TablePagination />}
        {(!Array.isArray(dataSource) || dataSource.length === 0) &&
          !fixedHeight && (
            <Flex width="100%" justifyContent="center">
              <Text title="ntd" color="red" fontWeight="bold" />
            </Flex>
          )}
        {loading && <LoadingOverLay visible={loading} />}
      </TableContainer>
    </>
  );
};

export default Table;
