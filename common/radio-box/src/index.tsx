import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import FloatingLabel from "@commons/floating-label";
import {
  RadioGroupContainer,
  RadioButtonLabel,
  RadioButtonInput,
} from "./styled";
import { radioBoxProps } from "./interface";

const RadioBox = ({
  name,
  options,
  width,
  onChange,
  value,
  label,
  margin,
  padding,
  height,
  hidden,
  disabled,
}: radioBoxProps) => {
  const { t } = useTranslation();
  const handleChange = useCallback(
    (event: any) => {
      onChange({ name: name, value: event?.target?.defaultValue });
    },
    [name, onChange]
  );
  return (
    <>
      <FloatingLabel
        width={width}
        height={height}
        padding={padding}
        margin={margin}
        label={label}
        hidden={hidden}
        top="-8px"
      >
        <RadioGroupContainer>
          {options.map((option) => {
            return (
              <RadioButtonLabel>
                <RadioButtonInput
                  type="radio"
                  value={option.value}
                  onClick={handleChange}
                  checked={option.value === value}
                  disabled={disabled}
                />
                {t(option.label)}
              </RadioButtonLabel>
            );
          })}
        </RadioGroupContainer>
      </FloatingLabel>
    </>
  );
};

export default memo(RadioBox);
export * from "./interface";
