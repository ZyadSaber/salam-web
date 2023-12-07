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
  fixedBy = 2,
  ...props
}: inputNumberProp) => {
  const handleChange = useCallback(
    (_: any) => {
      onChange({ name: name, value: +_.toFixed(fixedBy) });
    },
    [fixedBy, name, onChange]
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
          fixedBy={fixedBy}
          {...props}
        />
      </FloatingLabel>
    </>
  );
};

export default memo(InputNumber);
export * from "./interface";
