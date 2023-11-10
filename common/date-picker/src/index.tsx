import React, { memo } from "react";
import dayjs from "dayjs";
import { FormLabel, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
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
  margin = "10px",
  name,
  onChange,
  required = false,
  showTime,
  ...props
}: DatePickerProp) => {
  const { t } = useTranslation();
  const currentValue = actualDate
    ? dayjs(actualDate, dateFormats[dateFormat])
    : undefined;

  const handleChange = (_: DatePickerProp["value"], dateString: string) => {
    onChange && onChange({ name: name, value: dateString });
  };
  return (
    <Flex
      direction="column"
      width={width}
      padding={padding}
      margin={margin}
      height={height}
    >
      <FormLabel>{t(label)}</FormLabel>
      <StyledDate
        defaultValue={currentValue}
        value={currentValue}
        format={dateFormats[dateFormat]}
        showTime={showTime}
        width="100%"
        onChange={handleChange}
        required={required}
        {...props}
      />
    </Flex>
  );
};
export default memo(DatePicker);
export * from "./interface";
