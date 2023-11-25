import React, { memo } from "react";
import {totalFromArray} from "@commons/helpers"
import { CellContentWrapper } from "../style";

const TotalCellRender = ({ align, width, ellipsis, dataIndex, calculateAmount, dataSource  }: any) => {
  return (
    <>
      <CellContentWrapper
        display="block"
        align={align}
        width={width}
        ellipsis={ellipsis ? "true" : undefined}
        disableTranslation
      >
        {calculateAmount && 
         totalFromArray(dataSource, dataIndex)
        }
      </CellContentWrapper>
    </>
  );
};

export default memo(TotalCellRender);
