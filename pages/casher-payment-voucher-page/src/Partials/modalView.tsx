import React, { memo, useCallback } from "react";
import { useTableControlsButtons } from "@commons/table";
import { ModalViewProp, defaultDateAndTime } from "@commons/global";
import RadioBox from "@commons/radio-box";
import { TextArea } from "@commons/input-text";
import DatePicker from "@commons/date-picker";
import InputNumber from "@commons/input-number";
import { SelectWithApi } from "@commons/select";
import { useFormManager, useValidateForm } from "@commons/hooks";
import { SaveButton } from "@commons/button";
import Flex from "@commons/flex";
import { voucherOptions } from "../constant";

const ModalView = ({ onClose, selectedRow, refreshTable }: ModalViewProp) => {
  const { state, onChange } = useFormManager({
    initialValues: {
      ...selectedRow,
      voucher_type: selectedRow.voucher_type || "S",
      voucher_date: defaultDateAndTime || selectedRow.voucher_date,
    },
  });
  const { onSaveAndInsertion } = useTableControlsButtons({
    api: "POST_CASHER_PAYMENT_VOUCHER_TABLE_DATA",
    runFetch: refreshTable,
  });

  const handleSave = useCallback(() => {
    onSaveAndInsertion(state);
    onClose();
  }, [onSaveAndInsertion, state, onClose]);

  const handleValidateFelids = useValidateForm({
    validateFelids: [
      "voucher_date",
      "voucher_amount",
      "voucher_type",
      "voucher_id",
    ],
    functionToRun: handleSave,
    stateToValidate: state,
  });

  return (
    <>
      <Flex width="100%" gap="5px" wrap>
        <DatePicker
          name="voucher_date"
          onChange={onChange}
          value={state.voucher_date}
          label="dt"
          width="49.5%"
          dateFormat="fullDateWithTime"
          showTime
        />
        <InputNumber
          name="voucher_amount"
          onChange={onChange}
          value={state.voucher_amount}
          label="amnt"
          width="49.5%"
        />
        <RadioBox
          name="voucher_type"
          onChange={onChange}
          value={state.voucher_type}
          label="vchr"
          width="49.5%"
          options={voucherOptions}
          disabled={state.query_status === "u"}
        />
        <SelectWithApi
          name="voucher_id"
          api="QUERY_CUSTOMER_AND_SUPPLIER_LIST"
          label="nm"
          params={{
            invoice_type: state.voucher_type,
          }}
          value={state.voucher_id}
          fetchOnFirstRun
          width="49.5%"
          onChange={onChange}
        />
        <TextArea
          width="100%"
          name="notes"
          onChange={onChange}
          value={state?.notes}
          label="nts"
        />
      </Flex>
      <SaveButton onClick={handleValidateFelids} width="10%" />
    </>
  );
};

export default memo(ModalView);
