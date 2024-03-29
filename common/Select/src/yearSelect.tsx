import React, { memo, useCallback } from "react";
import { monthSelectProp } from "./interface";
import Select from "./select";

const YearSelect = ({
  width,
  onChange,
  label,
  value = 0,
  name,
  withLabel = false,
  margin,
  padding,
  range = 5,
}: monthSelectProp) => {
  const option = useCallback(() => {
    var now = new Date();
    var time = now.getFullYear();
    let options = [];
    for (let i = time - range; i <= time; i++) {
      options.push({ label: i, value: i });
    }
    return options;
  }, [range]);

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
        options={option()}
      />
    </>
  );
};

export default memo(YearSelect);
