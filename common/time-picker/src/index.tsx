import React, { memo } from "react";
import dayjs from "dayjs";
import FloatingLabel from "@commons/floating-label";
import { StyledDate } from "./styled";
import { DatePickerProp } from "./interface";

const TimePicker = ({
  dateFormat = "fullDate",
  label,
  value: actualDate,
  width = "200px",
  height,
  padding,
  margin,
  name,
  onChange,
  required = false,
  showTime,
  ...props
}: DatePickerProp) => {

  const currentValue = actualDate
    ? dayjs(actualDate, "hh:mm")
    : undefined;

  const handleChange = (_: unknown, dateString: string) => {
    onChange && onChange({ name: name, value: dateString });
  };

  return (
    <FloatingLabel
    label={label}
    width={width}
    height={height}
    padding={padding}
    margin={margin}
    hasContent={currentValue && currentValue?.toString()}
    top="7px"
    >
      <StyledDate
        defaultValue={currentValue}
        value={currentValue}
        format="HH:mm"
        width="100%"
        onChange={handleChange}
        placeholder=""
        required={required}
        {...props}
      />
    </FloatingLabel>
  );
};
export default memo(TimePicker);
export * from "./interface";
