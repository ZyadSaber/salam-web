/*
 *
 * Component: `BodyCellRenderer`.
 *
 */
import React, { memo } from "react";
import { CellContentWrapper } from "../style";
// import { InternalBaseBodyCellRendererProps } from "../index.interface";

// const LazyLoadedInputsNode = createLazyLoadedComponent(() =>
//   import(
//     "./BodyCellInputNode" /* webpackChunkName: "app-structure.exsys-table.input-node" */
//   )
// );

const BodyCellRenderer = ({
  currentRecordIndex,
  currentRecord,
  showEditableInputs,
  onInputChange,
  recordInputsDisabled,
  rowCellClassName,
  cellProps: {
    render,
    dataIndex,
    width,
    ellipsis,
    align,
    inputProps,
    valueFixedBy,
    titleDataIndex
  }
}: any) => {
  const valueOfDataIndex = currentRecord[dataIndex];
  const actualValue =
    typeof valueOfDataIndex === "number"
      ? valueOfDataIndex
      : valueOfDataIndex || "";
  const shouldLoadLazyLoadedInput = !!(
    showEditableInputs && inputProps?.inputType
  );

  let cellBodyValue =
    !shouldLoadLazyLoadedInput &&
    (render
      ? render?.(actualValue, currentRecord, currentRecordIndex)
      : actualValue);

  const bodyCellValueLowerCase = cellBodyValue?.toLowerCase?.();
  const isBooleanStringValue = ["n", "y"].includes(bodyCellValueLowerCase);

  if (isBooleanStringValue) {
    cellBodyValue = bodyCellValueLowerCase === "y" ? "✓" : "🗙";
  }

  const hasFixedByValue = typeof valueFixedBy === "number";
  const cellTitle =
    typeof titleDataIndex === "function"
      ? titleDataIndex(valueOfDataIndex, currentRecord, 0)
      : titleDataIndex
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
      {/* <LazyLoadedInputsNode
        shouldMountChunk={shouldLoadLazyLoadedInput}
        inputProps={inputProps}
        dataIndex={dataIndex}
        currentRecord={currentRecord}
        rowIndex={currentRecordIndex}
        onInputChange={onInputChange}
        recordInputsDisabled={recordInputsDisabled}
      /> */}

      {typeof cellBodyValue === "number" && hasFixedByValue
        ? cellBodyValue.toFixed(valueFixedBy)
        : cellBodyValue}

    </CellContentWrapper>
  );
};

export default memo(BodyCellRenderer);
