import React, { memo, useCallback } from "react";
import FloatingLabel from "@commons/floating-label";
import { StyledInput } from "./styled";
import { inputNumberProp } from "./interface";

const InputNumber = ({
  disabled,
  value,
  name,
  label,
  onChange,
  height,
  width = "200px",
  padding,
  margin,
  max,
  min = 0,
  ...props
}: inputNumberProp) => {
  const handleChange = useCallback(
    (_: any) => {
      onChange({ name: name, value: _ });
    },
    [name, onChange]
  );

  return (
    <>
      <FloatingLabel
        label={label}
        width={width}
        height={height}
        padding={padding}
        margin={margin}
        hasContent={value?.toString()}
        top="7px"
      >
        <StyledInput
          disabled={disabled}
          value={value}
          name={name}
          onChange={handleChange}
          padding={padding}
          margin={margin}
          max={max}
          min={min}
          {...props}
        />
      </FloatingLabel>
    </>
  );
};

export default memo(InputNumber);
export * from "./interface";
