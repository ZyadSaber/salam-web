  import calculateCellStringWidthToPixelNumber from "./calculateCellStringWidthToPixelNumber";
//   import getCheckableInputRenderedValue from "./getCheckableInputRenderedValue";
//   import getSelectRenderedValue from "./getSelectRenderedValue";
  
  const generateFixedColumns = ({
    containerWidthNumber,
    columnsFromProps,
    hasSelectionColumn,
    showExpandColumn,
    isMobileBreakPoint
  }:any) => {
    const columnsCount = columnsFromProps?.length ?? 0;
    let doesAnyColumnHasInputType = false;
  
    if (!columnsCount) {
      return {
        doesAnyColumnHasInputType,
        adjustedColumns: []
      };
    }
  
    const eachCellWidthAmountFromSelectionColumn = hasSelectionColumn
      ? columnsCount / 30
      : 0;
    const eachCellWidthAmountFromExpandColumn = showExpandColumn
      ? columnsCount / 30
      : 0;
  
    const adjustedColumns = columnsFromProps
      .map(
        ({
          width,
        //   inputProps,
        //   render,
          title,
        //   widthIfMobileBreakPoint,
        //   hiddenIfMobileBreakPoint,
          ...column
        }:any) => {
        //   const { selectOptions, inputType } = inputProps || {};
  
        //   if (!doesAnyColumnHasInputType) {
        //     doesAnyColumnHasInputType = !!inputType;
        //   }
  
        //   const isCheckBox = inputType === "checkbox";
        //   const isSelectField = inputType === "select";
  
        //   const actualRenderMethod = render
        //     ? render
        //     : isCheckBox
        //     ? getCheckableInputRenderedValue
        //     : isSelectField
        //     ? getSelectRenderedValue(selectOptions)
        //     : undefined;
  
          let fixedWidth = calculateCellStringWidthToPixelNumber(
            containerWidthNumber,
            width
          );
  
          fixedWidth = fixedWidth
            ? fixedWidth -
              eachCellWidthAmountFromSelectionColumn -
              eachCellWidthAmountFromExpandColumn
            : fixedWidth;
  
          return {
            ...column,
            title,
            // inputProps,
            // render: actualRenderMethod,
            width: fixedWidth
          };
        }
      );
  
    return {
    //   doesAnyColumnHasInputType,
      adjustedColumns: adjustedColumns
    };
  };
  
  export default generateFixedColumns;