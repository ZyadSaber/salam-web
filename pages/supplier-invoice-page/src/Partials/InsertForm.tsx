import React, { memo, useCallback } from "react";
import { SelectWithApi } from "@commons/select";
import { InputText } from "@commons/input-text";
import Flex from "@commons/flex";
import InputNumber from "@commons/input-number";
import { onChangeType } from "@commons/global";

interface InsertFormProp {
  onChange: any;
  state: any;
  handleItemMultiInput?: any;
}

const InsertForm = ({
  onChange,
  state,
  handleItemMultiInput,
}: InsertFormProp) => {
  const handleWidth = useCallback(
    ({ name, value }: onChangeType) => {
      handleItemMultiInput({
        [name]: value,
        supplier_invoice_item_size: +(
          +value * +state.supplier_invoice_item_height
        ).toFixed(2),
        supplier_invoice_item_total: +(
          +value *
          +state.supplier_invoice_item_height *
          +state.supplier_invoice_item_quantity *
          +state.supplier_invoice_item_price
        ).toFixed(2),
      });
    },
    [
      handleItemMultiInput,
      state.supplier_invoice_item_height,
      state.supplier_invoice_item_price,
      state.supplier_invoice_item_quantity,
    ]
  );
  const handleHeight = useCallback(
    ({ name, value }: onChangeType) => {
      handleItemMultiInput({
        [name]: value,
        supplier_invoice_item_size: +(
          +value * +state.supplier_invoice_item_width
        ).toFixed(2),
        supplier_invoice_item_total: +(
          +value *
          +state.supplier_invoice_item_width *
          +state.supplier_invoice_item_quantity *
          +state.supplier_invoice_item_price
        ).toFixed(2),
      });
    },
    [
      handleItemMultiInput,
      state.supplier_invoice_item_price,
      state.supplier_invoice_item_quantity,
      state.supplier_invoice_item_width,
    ]
  );
  const handleQuantity = useCallback(
    ({ name, value }: onChangeType) => {
      handleItemMultiInput({
        [name]: value,
        supplier_invoice_item_total:
          +value *
          +state.supplier_invoice_item_price *
          +state.supplier_invoice_item_size,
      });
    },
    [
      handleItemMultiInput,
      state.supplier_invoice_item_price,
      state.supplier_invoice_item_size,
    ]
  );
  const handlePrice = useCallback(
    ({ name, value }: onChangeType) => {
      handleItemMultiInput({
        [name]: value,
        supplier_invoice_item_total:
          +state.supplier_invoice_item_quantity *
          +value *
          +state.supplier_invoice_item_size,
      });
    },
    [
      handleItemMultiInput,
      state.supplier_invoice_item_quantity,
      state.supplier_invoice_item_size,
    ]
  );

  const handleItemIdChange = useCallback(({name, value, option}: any)=>handleItemMultiInput({
    [name]: value,
    item_name: option.label
  }),[handleItemMultiInput])


  return (
    <>
      <Flex width="100%" flexDirection="column">
        <Flex margin="0" padding="0" gap="5px">
          <SelectWithApi
            api="QUERY_ITEMS_LIST"
            onChange={handleItemIdChange}
            value={state.supplier_invoice_item_id}
            label="itmnm"
            name="supplier_invoice_item_id"
            withLabel
            fetchOnFirstRun
            selectLabelName="item_name"
            width="15%"
          />
        </Flex>
        <Flex width="100%" wrap gap="5px">
          <InputNumber
            name="supplier_invoice_item_width"
            value={state.supplier_invoice_item_width}
            label="wdth"
            onChange={handleWidth}
            width="13%"
          />
          <InputNumber
            name="supplier_invoice_item_height"
            value={state.supplier_invoice_item_height}
            label="hght"
            onChange={handleHeight}
            width="13%"
          />
          <InputNumber
            name="supplier_invoice_item_size"
            value={state.supplier_invoice_item_size}
            label="sz"
            onChange={onChange}
            disabled
            width="13%"
          />
          <InputNumber
            name="supplier_invoice_item_quantity"
            value={state.supplier_invoice_item_quantity}
            label="qty"
            onChange={handleQuantity}
            width="13%"
          />
          <InputNumber
            name="supplier_invoice_item_price"
            value={state.supplier_invoice_item_price}
            label="prc"
            onChange={handlePrice}
            width="13%"
          />
          <InputNumber
            name="supplier_invoice_item_total"
            value={state.supplier_invoice_item_total}
            label="total"
            onChange={onChange}
            disabled
            width="13%"
          />
          <InputText
            name="supplier_invoice_item_notes"
            value={state.supplier_invoice_item_notes}
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
