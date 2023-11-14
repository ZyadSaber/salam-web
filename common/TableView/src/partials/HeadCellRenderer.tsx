import React, { memo } from "react";
import { CellContentWrapper } from "../style";

const HeadCellRenderer = ({ align, width, ellipsis, title }: any) => {
  return (
    <>
      <CellContentWrapper
        display="block"
        align={align}
        width={width}
        title={ellipsis ? title : ""}
        ellipsis={ellipsis ? "true" : undefined}
      >
        {title}
      </CellContentWrapper>
    </>
  );
};

export default memo(HeadCellRenderer);
