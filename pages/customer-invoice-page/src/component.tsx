import React, { memo, useCallback } from "react";
import InputNumber from "@commons/input-number";
import { useMutation, useFormManager, useValidateForm } from "@commons/hooks";
import { onChangeType } from "@commons/global";
import { Table } from "@commons/table";
import Flex from "@commons/flex";
import { SelectWithApi } from "@commons/select";
import DatePicker from "@commons/date-picker"
import { Button } from "@commons/button";
import InsertForm from "./Partials/InsertForm";
import {
  columns,
  initialRootState,
  initialItemState,
  rootValidate,
  itemValidate,
} from "./constant";

const CustomerInvoices = () => {
  const { state, onChange, resetForm, handleMultiInput, handleArrayChange } =
    useFormManager({
      initialValues: initialRootState,
    });

  const {
    state: currentItemState,
    onChange: currentItemChange,
    handleMultiInput: handleItemMultiInput,
    handleSelectWithLabelChange,
    resetForm: resetItemForm,
  } = useFormManager({
    initialValues: initialItemState,
  });

  const { setRow } = useMutation({
    link: "POST_CUSTOMER_INVOICE_DETAILS",
    runOnSuccess: resetForm,
  });

  const handleAdd = useCallback(() => {
    handleArrayChange({
      name: "customer_invoice_items",
      value: {
        ...currentItemState,
        rowKey: state.customer_invoice_items.length + 1,
      },
    });
    let totals = 0;
    state.customer_invoice_items.forEach((item: any) => {
      totals = totals + +item.customer_invoice_item_total;
    });
    const computedTotals =
      totals + currentItemState.customer_invoice_item_total;
    handleMultiInput({
      customer_invoice_items: [
        ...state.customer_invoice_items,
        currentItemState,
      ],
      customer_invoice_total: computedTotals,
      customer_invoice_after_discount:
        computedTotals +
        +state.customer_invoice_design_fee -
        state.customer_invoice_discount,
      customer_invoice_credit:
        computedTotals +
        +state.customer_invoice_design_fee -
        state.customer_invoice_discount -
        state.customer_invoice_paid,
    });
    resetItemForm();
  }, [
    currentItemState,
    handleArrayChange,
    handleMultiInput,
    resetItemForm,
    state.customer_invoice_design_fee,
    state.customer_invoice_discount,
    state.customer_invoice_items,
    state.customer_invoice_paid,
  ]);

  const handleDesignFee = useCallback(
    ({ name, value }: onChangeType) => {
      handleMultiInput({
        [name]: +value,
        customer_invoice_after_discount:
          +state.customer_invoice_total +
          +value -
          +state.customer_invoice_discount,
        customer_invoice_credit:
          +state.customer_invoice_total +
          +value -
          +state.customer_invoice_paid -
          +state.customer_invoice_discount,
      });
    },
    [
      handleMultiInput,
      state.customer_invoice_discount,
      state.customer_invoice_paid,
      state.customer_invoice_total,
    ]
  );

  const handleDiscount = useCallback(
    ({ name, value }: onChangeType) => {
      handleMultiInput({
        [name]: +value,
        customer_invoice_after_discount:
          +state.customer_invoice_total +
          +state.customer_invoice_design_fee -
          +value,
        customer_invoice_credit:
          +state.customer_invoice_total +
          state.customer_invoice_design_fee -
          +state.customer_invoice_paid -
          +value,
      });
    },
    [
      handleMultiInput,
      state.customer_invoice_design_fee,
      state.customer_invoice_paid,
      state.customer_invoice_total,
    ]
  );

  const handlePaid = useCallback(
    ({ name, value }: onChangeType) => {
      handleMultiInput({
        [name]: +value,
        customer_invoice_credit: state.customer_invoice_after_discount - +value,
      });
    },
    [handleMultiInput, state.customer_invoice_after_discount]
  );

  const handleSave = useCallback(() => {
    setRow(state);
  }, [setRow, state]);

  const additionalButtons = [
    {
      icon: "clear",
      onClick: resetForm,
    },
  ];

  const handleDelete = (e: any) => {
    const computedItems = state.customer_invoice_items.filter(
      (f: any) => e.rowKey !== f.rowKey
    );
    const totalAfterDelete =
      state.customer_invoice_total - state.customer_invoice_item_total;
    handleMultiInput({
      customer_invoice_items: computedItems,
      customer_invoice_total: totalAfterDelete,
      customer_invoice_after_discount:
        totalAfterDelete - state.customer_invoice_discount,
      customer_invoice_credit:
        totalAfterDelete -
        state.customer_invoice_discount -
        state.customer_invoice_paid,
    });
  };

  const handleValidateFelids = useValidateForm({
    validateFelids: itemValidate,
    functionToRun: handleAdd,
    stateToValidate: currentItemState,
  });

  const handleValidateInvoiceFelids = useValidateForm({
    validateFelids: rootValidate,
    functionToRun: handleSave,
    stateToValidate: state,
  });

  return (
    <>
      <Flex flexDirection="column" width="100%">
        <Flex margin="0" padding="0">
          <SelectWithApi
            api={"QUERY_CUSTOMERS_LIST"}
            onChange={onChange}
            value={state.customer_id}
            label="cstmr"
            name="customer_id"
            fetchOnFirstRun
          />
          <DatePicker
            name="customer_invoice_date"
            value={state.customer_invoice_date}
            label="dt"
            onChange={onChange}
          />
        </Flex>
        <InsertForm
          state={currentItemState}
          onChange={currentItemChange}
          handleItemMultiInput={handleItemMultiInput}
          handleSelectWithLabelChange={handleSelectWithLabelChange}
        />
        <Table
          columns={columns}
          dataSource={state.customer_invoice_items}
          actionColumn
          actionLabel="Delete"
          onAction={handleDelete}
          hideTools={false}
          onAdd={handleValidateFelids}
          canAdd
          additionalButtons={additionalButtons}
        />
        <Flex width="100%" justifyContent="space-around">
          <InputNumber
            name="customer_invoice_total"
            disabled
            value={state.customer_invoice_total}
            label="total"
            width="13%"
          />
          <InputNumber
            name="customer_invoice_design_fee"
            value={state.customer_invoice_design_fee}
            onChange={handleDesignFee}
            label="dsgnfe"
            width="13%"
          />
          <InputNumber
            name="customer_invoice_discount"
            value={state.customer_invoice_discount}
            label="dscnt"
            onChange={handleDiscount}
            width="13%"
          />
          <InputNumber
            name="customer_invoice_after_discount"
            disabled
            value={state.customer_invoice_after_discount}
            label="tlaftrdsnt"
            width="13%"
          />
          <InputNumber
            name="customer_invoice_paid"
            value={state.customer_invoice_paid}
            label="paid"
            max={state.customer_invoice_after_discount}
            onChange={handlePaid}
            width="13%"
          />
          <InputNumber
            name="customer_invoice_credit"
            disabled
            value={state.customer_invoice_credit}
            label="crdt"
            width="13%"
          />
          <Button
            label="sv"
            width="15%"
            height="50%"
            margin="30px 0"
            onClick={handleValidateInvoiceFelids}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default memo(CustomerInvoices);
