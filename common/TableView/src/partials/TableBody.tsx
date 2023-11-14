import React, { memo, Fragment } from "react";
import { Button } from "@commons/button";
import HeadCellRenderer from "./HeadCellRenderer"
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
  onAction,
  fixedHeight
}: any) => {
  return (
    <tbody>
      {dataSource?.map((item: any) => {
        return (
          <Fragment
            key={item[rowKey]}
            //   background={`${rowSelected === item ? "#dbffbf" : ""}`}
          >
            <BodyRow
              onClick={handleSelectedRow(item)}
              onDoubleClick={handleDouble(item)}
            >
              {columns.map((column: any) => {
                return (
                  <StyledTableRowCell>
                    <HeadCellRenderer width={columns.width} title={item[column.dataIndex]}/>
                    

                  </StyledTableRowCell>
                );
              })}
            </BodyRow>
          </Fragment>
        );
      })}
    </tbody>
  );
};

export default memo(TableBody);
