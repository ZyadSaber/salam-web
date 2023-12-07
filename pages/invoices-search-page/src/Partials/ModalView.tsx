import React, { memo, useCallback } from "react";
import { SelectWithApi } from "@commons/select";
import InputNumber from "@commons/input-number";
import { InputText } from "@commons/input-text";
import { useFormManager, useValidateForm } from "@commons/hooks";
// import { ModalViewProp } from "@commons/global";
import { useTableControlsButtons } from "@commons/table";
import Flex from "@commons/flex";
import { onChangeType } from "@commons/global";
import Modal from "@commons/modal";

const ModalView = ({
  onClose,
  selectedRow,
  refreshTable,
  visible,
  invoiceType,
  invoice_id
}: any) => {
  const { state, onChange, handleMultiInput } = useFormManager({
    initialValues: {
      ...selectedRow,
      width: selectedRow.width || 0,
      height: selectedRow.height || 0,
      size: selectedRow.size || 0,
      quantity: selectedRow.quantity || 0,
      price: selectedRow.price || 0,
      total: selectedRow.total || 0,
      invoice_type: invoiceType,
      invoice_id
    },
  });

  const { onSaveAndInsertion } = useTableControlsButtons({
    api: "QUERY_CUSTOMER_ITEMS_INVOICE_DATA",
    runFetch: refreshTable,
  });

  const handleSave = useCallback(() => {
    onSaveAndInsertion(state);
    onClose();
  }, [onClose, onSaveAndInsertion, state]);

  const {
    invoice_print_option_id,
    invoice_item_id,
    width,
    height,
    size,
    quantity,
    price,
    total,
    notes,
  } = state;

  const handleWidth = useCallback(
    ({ name, value }: onChangeType) => {
      handleMultiInput({
        [name]: value,
        size: +(+value * +height).toFixed(2),
        total: (+value * +height * +quantity * +price).toFixed(2),
      });
    },
    [handleMultiInput, height, price, quantity]
  );
  const handleHeight = useCallback(
    ({ name, value }: onChangeType) => {
      handleMultiInput({
        [name]: value,
        size: +(+value * +width).toFixed(2),
        total: (+value * +width * +quantity * +price).toFixed(2),
      });
    },
    [handleMultiInput, price, quantity, width]
  );
  const handleQuantity = useCallback(
    ({ name, value }: onChangeType) => {
      handleMultiInput({
        [name]: value,
        total: +value * +price * +size,
      });
    },
    [handleMultiInput, price, size]
  );
  const handlePrice = useCallback(
    ({ name, value }: onChangeType) => {
      handleMultiInput({
        [name]: value,
        total: +quantity * +value * +size,
      });
    },
    [handleMultiInput, quantity, size]
  );
  const handleValidateFelids = useValidateForm({
    validateFelids: ["customer_name"],
    functionToRun: handleSave,
    stateToValidate: state,
  });

  return (
    <Modal
      visible={visible}
      onOK={handleValidateFelids}
      onClose={onClose}
      label="dtls"
    >
      <Flex width="100%" wrap align="center" gap="5px">
        <SelectWithApi
          api="QUERY_PRINT_OPTIONS_LIST"
          name="invoice_print_option_id"
          value={invoice_print_option_id}
          onChange={onChange}
          label="prntnm"
          width="24%"
          hidden={invoiceType === "S"}
        />
        <SelectWithApi
          api="QUERY_ITEMS_LIST"
          name="invoice_item_id"
          value={invoice_item_id}
          onChange={onChange}
          label="itmnm"
          width="24%"
        />
        <InputNumber
          name="width"
          value={width}
          onChange={handleWidth}
          min={0}
          label="wdth"
          width="24%"
        />
        <InputNumber
          name="height"
          value={height}
          onChange={handleHeight}
          min={0}
          label="hght"
          width="24%"
        />
        <InputNumber
          name="size"
          value={size}
          min={0}
          disabled
          label="sz"
          width="24%"
        />
        <InputNumber
          name="quantity"
          value={quantity}
          onChange={handleQuantity}
          min={0}
          label="qty"
          width="24%"
        />
        <InputNumber
          name="price"
          value={price}
          onChange={handlePrice}
          min={0}
          label="prc"
          width="24%"
        />
        <InputNumber
          name="total"
          value={total}
          min={0}
          disabled
          label="total"
          width="24%"
        />
        <InputText
          name="notes"
          value={notes}
          onChange={onChange}
          label="nts"
          width="100%"
        />
      </Flex>
    </Modal>
  );
};

export default memo(ModalView);
