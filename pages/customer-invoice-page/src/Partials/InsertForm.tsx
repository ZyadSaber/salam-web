import React, { memo, useCallback } from "react";
import { SelectWithApi } from "@commons/select";
import { InputText } from "@commons/input-text";
import Flex from "@commons/flex";
import InputNumber from "@commons/input-number";
import { onChangeType } from "@commons/global";
import { insertFormProp } from "../interface";

const InsertForm = ({
  onChange,
  state,
  handleItemMultiInput,
}: insertFormProp) => {
  const handleWidth = useCallback(
    ({ name, value }: onChangeType) => {
      handleItemMultiInput({
        [name]: value,
        customer_invoice_item_size: +(
          +value * +state.customer_invoice_item_height
        ).toFixed(2),
        customer_invoice_item_total: +(
          +value *
          +state.customer_invoice_item_height *
          +state.customer_invoice_item_quantity *
          +state.customer_invoice_item_price
        ).toFixed(2),
      });
    },
    [
      handleItemMultiInput,
      state.customer_invoice_item_height,
      state.customer_invoice_item_price,
      state.customer_invoice_item_quantity,
    ]
  );
  const handleHeight = useCallback(
    ({ name, value }: onChangeType) => {
      handleItemMultiInput({
        [name]: value,
        customer_invoice_item_size: +(
          +value * +state.customer_invoice_item_width
        ).toFixed(2),
        customer_invoice_item_total: +(
          +value *
          +state.customer_invoice_item_width *
          +state.customer_invoice_item_quantity *
          +state.customer_invoice_item_price
        ).toFixed(2),
      });
    },
    [
      handleItemMultiInput,
      state.customer_invoice_item_price,
      state.customer_invoice_item_quantity,
      state.customer_invoice_item_width,
    ]
  );
  const handleQuantity = useCallback(
    ({ name, value }: onChangeType) => {
      handleItemMultiInput({
        [name]: value,
        customer_invoice_item_total: +(
          +value *
          +state.customer_invoice_item_price *
          +state.customer_invoice_item_size
        ).toFixed(2),
      });
    },
    [
      handleItemMultiInput,
      state.customer_invoice_item_price,
      state.customer_invoice_item_size,
    ]
  );
  const handlePrice = useCallback(
    ({ name, value }: onChangeType) => {
      handleItemMultiInput({
        [name]: value,
        customer_invoice_item_total: +(
          +state.customer_invoice_item_quantity *
          +value *
          +state.customer_invoice_item_size
        ).toFixed(2),
      });
    },
    [
      handleItemMultiInput,
      state.customer_invoice_item_quantity,
      state.customer_invoice_item_size,
    ]
  );

  const handlePrintIdChange = useCallback(
    ({ name, value, option }: any) =>
      handleItemMultiInput({
        [name]: value,
        print_name: option.label,
      }),
    [handleItemMultiInput]
  );

  const handleItemIdChange = useCallback(
    ({ name, value, option }: any) =>
      handleItemMultiInput({
        [name]: value,
        item_name: option.label,
        customer_invoice_item_price: option.item_price,
      }),
    [handleItemMultiInput]
  );

  return (
    <>
      <Flex width="100%" flexDirection="column" margin="0" padding="0">
        <Flex margin="0" padding="0" gap="5px">
          <SelectWithApi
            api={"QUERY_PRINT_OPTIONS_LIST"}
            onChange={handlePrintIdChange}
            value={state.customer_invoice_print_option_id}
            label="prntnm"
            name="customer_invoice_print_option_id"
            withLabel
            fetchOnFirstRun
            selectLabelName="print_name"
            width="15%"
          />
          <SelectWithApi
            api={"QUERY_ITEMS_LIST"}
            onChange={handleItemIdChange}
            value={state.customer_invoice_item_id}
            label="itmnm"
            name="customer_invoice_item_id"
            withLabel
            fetchOnFirstRun
            selectLabelName="item_name"
            width="15%"
          />
        </Flex>
        <Flex margin="0" padding="0" gap="5px">
          <InputNumber
            name="customer_invoice_item_width"
            value={state.customer_invoice_item_width}
            label="wdth"
            onChange={handleWidth}
            width="13%"
          />
          <InputNumber
            name="customer_invoice_item_height"
            value={state.customer_invoice_item_height}
            label="hght"
            onChange={handleHeight}
            width="13%"
          />
          <InputNumber
            name="customer_invoice_item_size"
            value={state.customer_invoice_item_size}
            label="sz"
            onChange={onChange}
            disabled
            width="13%"
          />
          <InputNumber
            name="customer_invoice_item_quantity"
            value={state.customer_invoice_item_quantity}
            label="qnty"
            onChange={handleQuantity}
            width="13%"
          />
          <InputNumber
            name="customer_invoice_item_price"
            value={state.customer_invoice_item_price}
            label="prc"
            onChange={handlePrice}
            width="13%"
          />
          <InputNumber
            name="customer_invoice_item_total"
            value={state.customer_invoice_item_total}
            label="total"
            onChange={onChange}
            disabled
            width="13%"
          />
          <InputText
            name="customer_invoice_item_notes"
            value={state.customer_invoice_item_notes}
            label="nts"
            onChange={onChange}
            width="15%"
          />
        </Flex>
      </Flex>
    </>
  );
};

export default memo(InsertForm);
