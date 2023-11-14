import React, { useState, useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";
import LoadingOverLay from "@commons/loading-over-lay"
import{useBoundingClientRect} from "@commons/hooks"
import { Pagination } from 'antd';
import TableControlButtons from "./partials/TableControlButtons"
import generateFixedColumns from "./helpers/generateFixedColumns";
import TableHeader from "./partials/TableHeader"
import TableBody from "./partials/TableBody"
import createExcelFunction from "./helpers/createExcelFunction"
import {TableContainer, TableContentWrapper, StyledTable} from "./style"
import { TableProps } from "./interface";

const Table = ({
  dataSource,
  height = "300px",
  fixedHeight="300px",
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
  addDisabled,
  editDisabled,
  deleteDisabled,
  saveDisabled,
  printDisabled,
  excelDisabled,
  overflowY
}: TableProps) => {
  const { pathname } = useLocation();
  const [rowSelected, setRowSelected] = useState();
  const handleSelectedRow = useCallback(
    (item: any) => () => {
      if (onSelectedRow) onSelectedRow(item);
      setRowSelected(item);
    },
    [onSelectedRow]
  );

  const handleDouble = useCallback(
    (item: any) => () => {
      if (onDoubleClick) onDoubleClick(item);
      setRowSelected(item);
    },
    [onDoubleClick]
  );

  const pathName = pathname.replace("/", "");
  const excelFun = createExcelFunction({
    fileName: `${pathName} ${new Date().toUTCString()}.xlsx`,
    dataSource: dataSource,
    columns: columns
  })

  const tableColumnsLength = columns.length

  const [elementRef, rect] = useBoundingClientRect([
    tableColumnsLength,
    loading,
  ]);
  
  const containerWidthNumber = rect?.width ?? 200;

  const { doesAnyColumnHasInputType, adjustedColumns } = useMemo(
    () =>
      generateFixedColumns({
        containerWidthNumber,
        columnsFromProps: columns,
        // hasSelectionColumn,
        // showExpandColumn,
        // isMobileBreakPoint
      }),
    [containerWidthNumber, columns]
  );

  return (
    <>
      <TableContainer width={width} padding={padding} margin={margin} ref={elementRef}>
        <LoadingOverLay visible={loading} />
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
          editDisabled={editDisabled || !rowSelected}
          deleteDisabled={deleteDisabled || !rowSelected}
          saveDisabled={saveDisabled}
          printDisabled={printDisabled}
          excelDisabled={excelDisabled}
          additionalButtons={additionalButtons}
        />
        <TableContentWrapper
          height={height}
          overflowY={overflowY}
          // fixedHeight={fixedHeight}
        >
          <StyledTable cellSpacing={0}>
          <TableHeader 
          columns={adjustedColumns} 
          // actionColumn={actionColumn}
          // actionLabel={actionLabel}
          // actionWidth={actionWidth}
          />
          <TableBody
             columns={adjustedColumns} 
             actionColumn={actionColumn}
            //  actionLabel={actionLabel}
            //  actionWidth={actionWidth}
             dataSource={dataSource}
             rowKey={rowKey}
             handleSelectedRow={handleSelectedRow}
             handleDouble={handleDouble}
             rowSelected={rowSelected}
            //  onAction={onAction}
          />
          </StyledTable>
          <Pagination
      total={85}
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      defaultPageSize={20}
      defaultCurrent={1}
    />
        </TableContentWrapper>
      </TableContainer>
    </>
  );
};

export default Table;
