import React, { memo } from "react";
import dayjs from "dayjs";
import FloatingLabel from "@commons/floating-label";
import { StyledDate } from "./styled";
import { dateFormats } from "./constant";
import { DatePickerProp } from "./interface";

const DatePicker = ({
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
    ? dayjs(actualDate, dateFormats[dateFormat])
    : undefined;

  const handleChange = (_: unknown, dateString: string) => {
    console.log(dateString)
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
        format={dateFormats[dateFormat]}
        //@ts-ignore
        showTime={showTime && {format: 'HH:mm'} }
        width="100%"
        onChange={handleChange}
        placeholder=""
        required={required}
        {...props}
      />
    </FloatingLabel>
  );
};
export default memo(DatePicker);
export * from "./interface";
