import React, { memo, useCallback } from "react";
import { Table } from "@commons/table";
import DatePicker from "@commons/date-picker";
import { onChangeType } from "@commons/global";
import { useFormManager, useMutation, useValidateForm } from "@commons/hooks";
import { SelectWithApi } from "@commons/select";
import { Button } from "@commons/button";
import Flex from "@commons/flex";
import InputNumber from "@commons/input-number";
import InsertInvoiceForm from "@components/insert-invoice-form"
import {
  columns,
  initialRootState,
  initialItemState,
  rootValidate,
  itemValidate,
} from "./constants";

const SupplierInvoice = () => {
  const {
    state,
    onChange,
    resetForm,
    handleArrayChange,
    handleMultiInput,
    handleSelectWithLabelChange: mainStateHandleSelectWithLabelChange,
  } = useFormManager({
    initialValues: initialRootState,
  });

  const {
    state: currentItemState,
    onChange: currentItemChange,
    resetForm: resetItemForm,
    handleMultiInput: handleItemMultiInput,
  } = useFormManager({
    initialValues: initialItemState,
  });

  const { setRow } = useMutation({
    link: "POST_SUPPLIER_INVOICE",
    runOnSuccess: resetForm,
  });

  const handleSave = useCallback(() => {
    setRow(state);
  }, [setRow, state]);

  const additionalButtons = [
    {
      icon: "clear",
      onClick: resetForm,
    },
  ];

  const handleAdd = useCallback(() => {
    const computedItemState = {
      supplier_invoice_item_id: currentItemState.item_id,
      item_name: currentItemState.item_name,
      supplier_invoice_item_width: currentItemState.width,
      supplier_invoice_item_height: currentItemState.height,
      supplier_invoice_item_size: currentItemState.size,
      supplier_invoice_item_quantity: currentItemState.quantity,
      supplier_invoice_item_price: currentItemState.price,
      supplier_invoice_item_total: currentItemState.total,
      supplier_invoice_item_notes: currentItemState.notes,
      rowKey: state.supplier_invoice_items.length + 1
    }
    handleArrayChange({
      name: "supplier_invoice_items",
      value: computedItemState
    });
    let totals = 0;
    state.supplier_invoice_items.forEach((item: any) => {
      totals = totals + +item.supplier_invoice_item_total;
    });
    const computedTotals =
      totals + computedItemState.supplier_invoice_item_total;
    handleMultiInput({
      supplier_invoice_items: [
        ...state.supplier_invoice_items,
        computedItemState,
      ],
      supplier_invoice_total: computedTotals,
      supplier_invoice_after_discount:
        computedTotals - state.supplier_invoice_discount,
      supplier_invoice_credit:
        computedTotals -
        state.supplier_invoice_discount -
        state.supplier_invoice_paid,
    });
    resetItemForm();
  }, [currentItemState, handleArrayChange, handleMultiInput, resetItemForm, state.supplier_invoice_discount, state.supplier_invoice_items, state.supplier_invoice_paid]);

  const handleDiscount = useCallback(
    ({ name, value }: onChangeType) => {
      handleMultiInput({
        [name]: +value,
        supplier_invoice_after_discount: +state.supplier_invoice_total - +value,
        supplier_invoice_credit:
          +state.supplier_invoice_paid - +state.supplier_invoice_total - +value,
      });
    },
    [
      handleMultiInput,
      state.supplier_invoice_paid,
      state.supplier_invoice_total,
    ]
  );

  const handlePaid = useCallback(
    ({ name, value }: onChangeType) => {
      handleMultiInput({
        [name]: +value,
        supplier_invoice_credit:
          state.supplier_invoice_total -
          state.supplier_invoice_discount -
          +value,
      });
    },
    [
      handleMultiInput,
      state.supplier_invoice_discount,
      state.supplier_invoice_total,
    ]
  );

  const handleDelete = (e: any) => {
    const computedItems = state.supplier_invoice_items.filter(
      (f: any) => e.rowKey !== f.rowKey
    );

    const totalAfterDelete =
      state.supplier_invoice_total - e.supplier_invoice_item_total;
    handleMultiInput({
      supplier_invoice_items: computedItems,
      supplier_invoice_total: totalAfterDelete,
      supplier_invoice_after_discount:
        totalAfterDelete - state.supplier_invoice_discount,
      supplier_invoice_credit:
        totalAfterDelete -
        state.supplier_invoice_discount -
        state.supplier_invoice_paid,
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

  const actionButtons = [
    {
      label: "delete",
      onClick: handleDelete,
      width: "100%",
      margin: "0",
      padding: "0",
    },
  ];

  return (
    <Flex flexDirection="column" width="100%">
      <Flex margin="0" padding="0" gap="5px">
        <SelectWithApi
          api="QUERY_SUPPLIER_LIST"
          onChange={mainStateHandleSelectWithLabelChange}
          value={state.supplier_id}
          label="splr"
          name="supplier_id"
          fetchOnFirstRun
          withLabel
          selectLabelName="supplier_name"
          width="15%"
        />
        <DatePicker
          name="supplier_invoice_date"
          value={state.supplier_invoice_date}
          label="dt"
          onChange={onChange}
          width="15%"
          dateFormat="fullDateWithTime"
          showTime
        />
      </Flex>
      <InsertInvoiceForm
        hidePrintOptions
        values={currentItemState}
        onChange={currentItemChange}
        handleIMultiInput={handleItemMultiInput}
      />
      <Table
        columns={columns}
        dataSource={state.supplier_invoice_items}
        actionColumn={actionButtons}
        actionWidth={100}
        actionLabel="dlt"
        rowKey="supplier_invoice_item_id"
        hideTools={false}
        onAdd={handleValidateFelids}
        canAdd={true}
        additionalButtons={additionalButtons}
        fixedHeight="250px"
        noPagination
      />
      <Flex
        width="100%"
        justifyContent="space-around"
        wrap
        gap="10px"
        align="center"
      >
        <InputNumber
          name="supplier_invoice_total"
          disabled
          value={state.supplier_invoice_total}
          label="total"
          width="15%"
        />
        <InputNumber
          name="supplier_invoice_discount"
          value={state.supplier_invoice_discount}
          label="dscnt"
          onChange={handleDiscount}
          width="15%"
        />
        <InputNumber
          name="supplier_invoice_after_discount"
          disabled
          value={state.supplier_invoice_after_discount}
          label="tlaftrdsnt"
          width="15%"
        />
        <InputNumber
          name="supplier_invoice_paid"
          value={state.handlePaid}
          label="paid"
          onChange={handlePaid}
          max={state.supplier_invoice_after_discount}
          width="15%"
        />
        <InputNumber
          name="supplier_invoice_credit"
          disabled
          value={state.supplier_invoice_credit}
          label="crdt"
          width="15%"
        />
        <Button
          label="sv"
          width="15%"
          margin="30px 0"
          onClick={handleValidateInvoiceFelids}
        />
      </Flex>
    </Flex>
  );
};

export default memo(SupplierInvoice);
