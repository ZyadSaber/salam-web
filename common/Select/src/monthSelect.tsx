import React, { memo, useCallback } from "react";
import { monthSelectProp } from "./interface";
import Select from "./select";

const MonthSelect = ({
  width,
  onChange,
  label,
  value = 0,
  name,
  withLabel = false,
  margin,
  padding,
}: monthSelectProp) => {
  const options = useCallback(() => {
    let options = [];
    for (let i = 1; i <= 12; i++) {
      options.push({ label: i, value: i });
    }
    return options;
  }, []);

  return (
    <>
      <Select
        name={name}
        withLabel={withLabel}
        margin={margin}
        padding={padding}
        value={value}
        onChange={onChange}
        label={label}
        width={width}
        //@ts-ignore for now
        options={options()}
      />
    </>
  );
};

export default memo(MonthSelect);
