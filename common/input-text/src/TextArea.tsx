import React, { memo, useCallback } from "react";
import FloatingLabel from "@commons/floating-label";
import { StyledTextArea } from "./styled";
import { TextAreaProps } from "./interface";

const TextArea = ({
  name,
  label = "name",
  placeHolder,
  width,
  height,
  padding,
  margin,
  onChange,
  value,
  disabled,
}: TextAreaProps) => {
  const handleChange = useCallback(
    (event: { target: { value: string } }) => {
      onChange({ name: name, value: event.target.value });
    },
    [name, onChange]
  );

  return (
    <FloatingLabel
      label={label}
      hasContent={value?.toString()}
      margin={margin}
      padding={padding}
      height={height}
      width={width}
    >
      <StyledTextArea
        placeholder={placeHolder}
        onChange={handleChange}
        value={value}
        disabled={disabled}
      />
    </FloatingLabel>
  );
};

export default memo(TextArea);
