import React, { memo } from "react";
import FloatingLabel from "@commons/floating-label";
import { StyledSelect } from "./styled";
import { selectProps } from "./interface";

const Select = ({
  height,
  width = "200px",
  options,
  onChange,
  label,
  value,
  name,
  margin,
  padding,
  onSearch,
  hidden,
  disabled,
  loading,
  mode,
}: selectProps) => {
  const handleChange = (value: unknown | number, option: any) => {
    onChange({ name, value, option });
  };

  const actualValue = value ? value : undefined;

  return (
    <FloatingLabel
      label={label}
      hasContent={actualValue}
      margin={margin}
      padding={padding}
      height={height}
      width={width}
      hidden={hidden}
      top="7px"
    >
      <StyledSelect
        options={options}
        bordered={false}
        allowClear
        // showSearch
        onSearch={onSearch}
        onChange={handleChange}
        filterOption={false}
        value={actualValue}
        loading={loading}
        disabled={loading || disabled}
        mode={mode}
        placeholder=""
      />
    </FloatingLabel>
  );
};

export default memo(Select);
