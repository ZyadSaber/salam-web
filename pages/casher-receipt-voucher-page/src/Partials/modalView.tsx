import React, { memo, useCallback } from "react";
import { useTableControlsButtons } from "@commons/table";
import { ModalViewProp, defaultDate } from "@commons/global";
import RadioBox from "@commons/radio-box";
import { TextArea } from "@commons/input-text";
import InputNumber from "@commons/input-number";
import DatePicker from "@commons/date-picker";
import { SelectWithApi } from "@commons/select";
import { useFormManager, useValidateForm } from "@commons/hooks";
import { SaveButton } from "@commons/button";
import Flex from "@commons/flex";
import { voucherOptions } from "../constant";

const ModalView = ({ onClose, selectedRow, refreshTable }: ModalViewProp) => {
  const {
    state: {
      voucher_date,
      voucher_amount,
      voucher_type,
      query_status,
      voucher_id,
      notes,
    },
    onChange,
  } = useFormManager({
    initialValues: {
      ...selectedRow,
      voucher_date: defaultDate || selectedRow.voucher_date,
      voucher_type: selectedRow.voucher_type || "C",
    },
  });
  const { onSaveAndInsertion } = useTableControlsButtons({
    api: "POST_CASHER_RECEIPT_VOUCHER_TABLE_DATA",
    runFetch: refreshTable,
  });

  const handleSave = useCallback(() => {
    onSaveAndInsertion({
      voucher_date,
      voucher_amount,
      voucher_type,
      query_status,
      voucher_id,
      notes,
    });
    onClose();
  }, [
    onSaveAndInsertion,
    voucher_date,
    voucher_amount,
    voucher_type,
    query_status,
    voucher_id,
    notes,
    onClose,
  ]);

  const handleValidateFelids = useValidateForm({
    validateFelids: [
      "voucher_date",
      "voucher_amount",
      "voucher_type",
      "voucher_id",
    ],
    functionToRun: handleSave,
    stateToValidate: {
      voucher_date,
      voucher_amount,
      voucher_type,
      query_status,
      voucher_id,
      notes,
    },
  });

  return (
    <>
      <Flex width="100%" gap="5px" wrap>
        <DatePicker
          name="voucher_date"
          onChange={onChange}
          value={voucher_date}
          label="dt"
          width="49.5%"
        />
        <InputNumber
          name="voucher_amount"
          onChange={onChange}
          value={voucher_amount}
          label="amnt"
          width="49.5%"
        />
        <RadioBox
          name="voucher_type"
          onChange={onChange}
          value={voucher_type}
          label="vchr"
          width="49.5%"
          options={voucherOptions}
          hidden={query_status === "u"}
        />
        <SelectWithApi
          name="voucher_id"
          api="QUERY_CUSTOMER_AND_SUPPLIER_LIST"
          label="nm"
          params={{
            invoice_type: voucher_type,
          }}
          value={voucher_id}
          fetchOnFirstRun
          width="49.5%"
          onChange={onChange}
        />
        <TextArea
          width="100%"
          name="notes"
          onChange={onChange}
          value={notes}
          label="nts"
        />
      </Flex>
      <SaveButton onClick={handleValidateFelids} />
    </>
  );
};

export default memo(ModalView);
