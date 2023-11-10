import React, { memo, useCallback } from "react";
import { FormLabel, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { StyledInput } from "./styled";
import { inputNumberProp } from "./interface";

const InputNumber = ({
  disabled,
  value,
  name,
  label = "",
  onChange,
  height = "65px",
  width = "200px",
  padding,
  margin = "10px",
  max,
  min = 0,
  ...props
}: inputNumberProp) => {
  const { t } = useTranslation();

  const handleChange = useCallback(
    (_: any) => {
      onChange({ name: name, value: _ });
    },
    [name, onChange]
  );

  return (
    <Flex
      direction="column"
      width={width}
      padding={padding}
      margin={margin}
      height={height}
    >
      <FormLabel>{t(label)}</FormLabel>
      <StyledInput
        disabled={disabled}
        value={value}
        name={name}
        onChange={handleChange}
        height={height}
        width={width}
        padding={padding}
        margin={margin}
        max={max}
        min={min}
        {...props}
      />
    </Flex>
  );
};

export default memo(InputNumber);
export * from "./interface"
