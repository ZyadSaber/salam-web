import React, { memo } from "react";
import Button from "./button";
import { saveButtonProp } from "./interface";

const SaveButton = ({
  onOK,
  width = "auto",
  label = "sv",
  ...props
}: saveButtonProp) => {
  return (
    <>
      <Button onClick={onOK} label="sv" width={width} {...props} />
    </>
  );
};

export default memo(SaveButton);
