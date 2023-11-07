import React, { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { StyledCheckBox } from "./styled";
import { CheckBoxProps } from "./interface";

const CheckBox = ({
  label = "",
  value,
  onChange,
  name,
  width,
  height,
  disabled,
  required,
  padding,
  margin = "10px",
}: CheckBoxProps) => {
  const { t } = useTranslation();
  const handleChange = useCallback(
    (event: { target: { checked: boolean } }) => {
      if (event.target.checked === true) {
        onChange({ name: name, value: "Y" });
      } else if (event.target.checked === false) {
        onChange({ name: name, value: "N" });
      }
    },
    [name, onChange]
  );

  const checked = value === "Y" ? true : false;

  return (
    <>
      <StyledCheckBox 
      onChange={handleChange}
      checked={checked}
      width={width}
      height={height}
      disabled={disabled}
      padding={padding}
      margin={margin}
      required={required}
      >
        {t(label)}
    </StyledCheckBox>
    </>
  );
};

export default memo(CheckBox);
