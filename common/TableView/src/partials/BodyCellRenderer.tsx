/*
 *
 * Component: `BodyCellRenderer`.
 *
 */
import React, { memo } from "react";
import { CellContentWrapper } from "../style";

const BodyCellRenderer = ({
  currentRecord,
  rowCellClassName,
  cellProps: {
    dataIndex,
    width,
    ellipsis,
    align,
    valueFixedBy,
    titleDataIndex
  }
}: any) => {
  const valueOfDataIndex = currentRecord[dataIndex];
  const actualValue =
    typeof valueOfDataIndex === "number"
      ? valueOfDataIndex
      : valueOfDataIndex || "";

  let cellBodyValue = actualValue

  const bodyCellValueLowerCase = cellBodyValue?.toLowerCase?.();
  const isBooleanStringValue = ["n", "y"].includes(bodyCellValueLowerCase);

  if (isBooleanStringValue) {
    cellBodyValue = bodyCellValueLowerCase === "y" ? "✓" : "🗙";
  }

  const cellTitle = titleDataIndex
    ? currentRecord[titleDataIndex]
    : "";

  const { record_foreground_color, record_background_color } =
    currentRecord || {};

  return (
    <CellContentWrapper
      align={align}
      width={width}
      ellipsis={ellipsis ? "true" : undefined}
      disableTranslation
      title={cellTitle}
      color={record_foreground_color}
      backgroundColor={record_background_color}
      className={rowCellClassName?.(currentRecord, dataIndex)}
    >

      {cellBodyValue}

    </CellContentWrapper>
  );
};

export default memo(BodyCellRenderer);
