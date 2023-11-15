import React, { memo, Fragment } from "react";
import BodyCellRenderer from "./BodyCellRenderer";
import Flex from "@commons/flex"
import {Button} from "@commons/button"
import { StyledTableRowCell, BodyRow } from "../style";

const TableBody = ({
  columns,
  actionColumn,
  actionLabel,
  actionWidth,
  dataSource,
  rowKey,
  handleSelectedRow,
  handleDouble,
  rowSelected,
  selectedRowBackgroundColor,
  onAction,
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
              onClick={handleSelectedRow(record, index, currentRowKey)}
              onDoubleClick={handleDouble(record, index, currentRowKey)}
              selected={isRowChecked || clickedRowKey === currentRowKey}
            >
              {columns.map((cellProps: any, currentColumnIndex: number) => {
                const {
                  // dataIndex,
                  // align,
                  // children,
                  titleDataIndex
                } = cellProps;

                const sharedProps = {
                  currentRecordIndex,
                  currentRecord: record,
                  fontSize,
                  // showEditableInputs,
                  // onInputChange,
                  // recordInputsDisabled,
                  titleDataIndex,
                  // rowCellClassName
                };

                // const computedCellKey = `${dataIndex}-col-${currentColumnIndex}`;

                return (
                  <StyledTableRowCell>
                    <BodyCellRenderer {...sharedProps} cellProps={cellProps}/>
                  </StyledTableRowCell>
                );
              })}
              <StyledTableRowCell>
                <Flex width="100%">
                    <Button label="dd" height="auto" padding="0" margin="0"  width="100%" />
                    </Flex>
                  </StyledTableRowCell>
            </BodyRow>
          </Fragment>
        );
      })}
    </tbody>
  );
};

export default memo(TableBody);
