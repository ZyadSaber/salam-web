import React, { memo, Fragment } from "react";
import BodyCellRenderer from "./BodyCellRenderer";
import Flex from "@commons/flex"
import { Button, IconButton } from "@commons/button"
import { StyledTableRowCell, BodyRow } from "../style";

const TableBody = ({
  columns,
  actionColumn,
  dataSource,
  rowKey,
  handleSelectedRow,
  onDoubleClick,
  selectedRowBackgroundColor,
  clickedRowKey,
  isRowChecked,
  indexOfFirstItem,
  fontSize
}: any) => {
  return (
    <tbody>
      {dataSource?.map((record: any, index: number) => {
        const currentRecordIndex = (indexOfFirstItem || 0) + index;
        const currentRowKey = record[rowKey]
        return (
          <Fragment key={currentRowKey}>
            <BodyRow
              selectedRowBackgroundColor={selectedRowBackgroundColor}
              onClick={handleSelectedRow(currentRowKey, record, index)}
              onDoubleClick={onDoubleClick(currentRowKey, record, index)}
              selected={isRowChecked || clickedRowKey === currentRowKey}
            >
              {columns.map((cellProps: any) => {
                const {
                  titleDataIndex
                } = cellProps;

                const sharedProps = {
                  currentRecordIndex,
                  currentRecord: record,
                  fontSize,
                  titleDataIndex,
                };

                return (
                  <StyledTableRowCell>
                    <BodyCellRenderer {...sharedProps} cellProps={cellProps} />
                  </StyledTableRowCell>
                );
              })}
              {actionColumn && <StyledTableRowCell>
                <Flex width="100%">
                  {actionColumn.map((actionButton: any) => {
                    if (actionButton.icon) {
                      return (<IconButton {...actionButton} onClick={() => { actionButton.onClick(record, index) }} />)
                    }
                    return (<Button {...actionButton} onClick={() => { actionButton.onClick(record, index) }} />)
                  })}
                </Flex>
              </StyledTableRowCell>}
            </BodyRow>
          </Fragment>
        );
      })}
    </tbody>
  );
};

export default memo(TableBody);
