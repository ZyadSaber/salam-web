import React, { memo, useCallback } from "react";
import { SelectWithApi } from "@commons/select";
import { InputText } from "@commons/input-text";
import Flex from "@commons/flex";
import InputNumber from "@commons/input-number";

interface onChangeType {
  name: string;
  value: number;
}

const InsertInvoiceForm = ({
  onChange,
  handleIMultiInput,
  values,
  hidePrintOptions
}: any) => {

  const {
    item_id,
    width,
    height,
    size,
    quantity,
    price,
    total,
    notes
  } = values;

  const handleItemIdChange = useCallback(({ name, value, option }: any) => handleIMultiInput({
    [name]: value,
    item_name: option.label,
    price: option.item_price
  }), [handleIMultiInput]);

  const handleWidth = useCallback(
    ({ name, value }: onChangeType) => {
      handleIMultiInput({
        [name]: value,
        size: +(value * height).toFixed(2),
        total: +(value * height * quantity * price).toFixed(2),
      });
    },
    [handleIMultiInput, height, price, quantity]
  );

  const handleHeight = useCallback(
    ({ name, value }: onChangeType) => {
      handleIMultiInput({
        [name]: value,
        size: +(value * width).toFixed(2),
        total: +(value * width * quantity * price).toFixed(2),
      });
    },
    [handleIMultiInput, price, quantity, width]
  );

  const handleQuantity = useCallback(
    ({ name, value }: onChangeType) => {
      handleIMultiInput({
        [name]: value,
        total: value * price * size
      });
    },
    [handleIMultiInput, price, size]
  );

  const handlePrice = useCallback(
    ({ name, value }: onChangeType) => {
      handleIMultiInput({
        [name]: value,
        total: quantity * +value * size
      });
    },
    [handleIMultiInput, quantity, size]
  );

  return (
    <Flex width="100%" flexDirection="column">
      <Flex margin="0" padding="0" gap="5px">
        <SelectWithApi
          api="QUERY_ITEMS_LIST"
          onChange={handleItemIdChange}
          value={item_id}
          label="itmnm"
          name="item_id"
          fetchOnFirstRun
          width="15%"
          hidden={hidePrintOptions}
        />
        <SelectWithApi
          api="QUERY_ITEMS_LIST"
          onChange={handleItemIdChange}
          value={item_id}
          label="itmnm"
          name="item_id"
          fetchOnFirstRun
          width="15%"
        />
      </Flex>
      <Flex width="100%" wrap gap="5px">
        <InputNumber
          name="width"
          value={width}
          label="wdth"
          onChange={handleWidth}
          width="13%"
        />
        <InputNumber
          name="height"
          value={height}
          label="hght"
          onChange={handleHeight}
          width="13%"
        />
        <InputNumber
          name="size"
          value={size}
          label="sz"
          onChange={onChange}
          disabled
          width="13%"
        />
        <InputNumber
          name="quantity"
          value={quantity}
          label="qty"
          onChange={handleQuantity}
          width="13%"
        />
        <InputNumber
          name="price"
          value={price}
          label="prc"
          onChange={handlePrice}
          width="13%"
        />
        <InputNumber
          name="total"
          value={total}
          label="total"
          onChange={onChange}
          disabled
          width="13%"
        />
        <InputText
          name="notes"
          value={notes}
          label="nts"
          onChange={onChange}
          width="15%"
        />
      </Flex>
    </Flex>
  );
};

export default memo(InsertInvoiceForm);
