import React, { memo, useCallback } from "react";
import InputNumber from "@commons/input-number";
import { useMutation, useFormManager, useValidateForm } from "@commons/hooks";
import { onChangeType } from "@commons/global";
import { Table } from "@commons/table";
import Flex from "@commons/flex";
import { SelectWithApi } from "@commons/select";
import DatePicker from "@commons/date-picker";
import { Button } from "@commons/button";
import InsertInvoiceForm from "@components/insert-invoice-form";
import {
  columns,
  initialRootState,
  initialItemState,
  rootValidate,
  itemValidate,
} from "./constant";

const CustomerInvoices = () => {
  const {
    state: {
      customer_invoice_items,
      customer_invoice_design_fee,
      customer_invoice_discount,
      customer_invoice_paid,
      customer_invoice_total,
      customer_invoice_after_discount,
      customer_invoice_item_total,
      customer_id,
      customer_invoice_date,
      customer_invoice_credit,
    },
    onChange,
    resetForm,
    handleMultiInput,
  } = useFormManager({
    initialValues: initialRootState,
  });

  const {
    state: currentItemState,
    onChange: currentItemChange,
    handleMultiInput: handleItemMultiInput,
    resetForm: resetItemForm,
  } = useFormManager({
    initialValues: initialItemState,
  });

  const { setRow } = useMutation({
    link: "POST_CUSTOMER_INVOICE_DETAILS",
    runOnSuccess: resetForm,
  });

  const handleAdd = useCallback(() => {
    const computedItemState = {
      customer_invoice_print_option_id: currentItemState.print_id,
      print_name: currentItemState.print_name,
      customer_invoice_item_id: currentItemState.item_id,
      item_name: currentItemState.item_name,
      customer_invoice_item_width: currentItemState.width,
      customer_invoice_item_height: currentItemState.height,
      customer_invoice_item_size: currentItemState.size,
      customer_invoice_item_quantity: currentItemState.quantity,
      customer_invoice_item_price: currentItemState.price,
      customer_invoice_item_total: currentItemState.total,
      customer_invoice_item_notes: currentItemState.notes,
      rowKey: customer_invoice_items.length + 1,
    };
    let totals = 0;
    customer_invoice_items.forEach((item: any) => {
      totals = totals + +item.customer_invoice_item_total;
    });
    const computedTotals =
      +totals + +computedItemState.customer_invoice_item_total;
    handleMultiInput({
      customer_invoice_items: [...customer_invoice_items, computedItemState],
      customer_invoice_total: +computedTotals.toFixed(2),
      customer_invoice_after_discount: (
        computedTotals +
        customer_invoice_design_fee -
        customer_invoice_discount
      ).toFixed(2),
      customer_invoice_credit: (
        computedTotals +
        customer_invoice_design_fee -
        customer_invoice_discount -
        customer_invoice_paid
      ).toFixed(2),
    });
    resetItemForm();
  }, [
    currentItemState.height,
    currentItemState.item_id,
    currentItemState.item_name,
    currentItemState.notes,
    currentItemState.price,
    currentItemState.print_id,
    currentItemState.print_name,
    currentItemState.quantity,
    currentItemState.size,
    currentItemState.total,
    currentItemState.width,
    customer_invoice_design_fee,
    customer_invoice_discount,
    customer_invoice_items,
    customer_invoice_paid,
    handleMultiInput,
    resetItemForm,
  ]);

  const handleDesignFee = useCallback(
    ({ name, value }: onChangeType) => {
      handleMultiInput({
        [name]: +value,
        customer_invoice_after_discount: +(
          +customer_invoice_total +
          +value -
          +customer_invoice_discount
        ).toFixed(2),
        customer_invoice_credit: +(
          +customer_invoice_total +
          +value -
          +customer_invoice_paid -
          +customer_invoice_discount
        ).toFixed(2),
      });
    },
    [
      customer_invoice_discount,
      customer_invoice_paid,
      customer_invoice_total,
      handleMultiInput,
    ]
  );

  const handleDiscount = useCallback(
    ({ name, value }: onChangeType) => {
      handleMultiInput({
        [name]: +value,
        customer_invoice_after_discount: +(
          +customer_invoice_total +
          +customer_invoice_design_fee -
          +value
        ).toFixed(2),
        customer_invoice_credit: +(
          +customer_invoice_total +
          +customer_invoice_design_fee -
          +customer_invoice_paid -
          +value
        ).toFixed(2),
      });
    },
    [
      customer_invoice_design_fee,
      customer_invoice_paid,
      customer_invoice_total,
      handleMultiInput,
    ]
  );

  const handlePaid = useCallback(
    ({ name, value }: onChangeType) => {
      handleMultiInput({
        [name]: +value,
        customer_invoice_credit: +(
          +customer_invoice_after_discount - +value
        ).toFixed(2),
      });
    },
    [customer_invoice_after_discount, handleMultiInput]
  );

  const handleSave = useCallback(() => {
    setRow({
      customer_invoice_items,
      customer_invoice_design_fee,
      customer_invoice_discount,
      customer_invoice_total,
      customer_invoice_paid,
      customer_invoice_after_discount,
      customer_invoice_item_total,
      customer_id,
      customer_invoice_date,
      customer_invoice_credit,
    });
  }, [
    customer_id,
    customer_invoice_after_discount,
    customer_invoice_credit,
    customer_invoice_date,
    customer_invoice_design_fee,
    customer_invoice_discount,
    customer_invoice_item_total,
    customer_invoice_items,
    customer_invoice_paid,
    customer_invoice_total,
    setRow,
  ]);

  const additionalButtons = [
    {
      icon: "clear",
      onClick: resetForm,
    },
  ];

  const handleDelete = (e: any) => {
    const computedItems = customer_invoice_items.filter(
      (f: any) => e.rowKey !== f.rowKey
    );
    const totalAfterDelete =
      customer_invoice_total - e.customer_invoice_item_total;
    handleMultiInput({
      customer_invoice_items: computedItems,
      customer_invoice_total: totalAfterDelete,
      customer_invoice_after_discount:
        totalAfterDelete - customer_invoice_discount,
      customer_invoice_credit:
        totalAfterDelete - customer_invoice_discount - customer_invoice_paid,
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
    stateToValidate: {
      customer_invoice_items,
      customer_invoice_design_fee,
      customer_invoice_discount,
      customer_invoice_paid,
      customer_invoice_total,
      customer_invoice_after_discount,
      customer_invoice_item_total,
      customer_id,
      customer_invoice_date,
      customer_invoice_credit,
    },
  });

  const actionButtons = [
    {
      label: "delete",
      onClick: handleDelete,
      width: "80%",
    },
  ];

  return (
    <Flex flexDirection="column" width="100%">
      <Flex margin="0" padding="0" gap="5px">
        <SelectWithApi
          api={"QUERY_CUSTOMERS_LIST"}
          onChange={onChange}
          value={customer_id}
          label="cstmr"
          name="customer_id"
          fetchOnFirstRun
          width="15%"
        />
        <DatePicker
          name="customer_invoice_date"
          value={customer_invoice_date}
          label="dt"
          onChange={onChange}
          width="15%"
          dateFormat="fullDateWithTime"
          showTime
        />
      </Flex>
      <InsertInvoiceForm
        values={currentItemState}
        onChange={currentItemChange}
        handleIMultiInput={handleItemMultiInput}
      />
      <Table
        columns={columns}
        dataSource={customer_invoice_items}
        actionColumn={actionButtons}
        actionLabel="del"
        hideTools={false}
        onAdd={handleValidateFelids}
        actionWidth={100}
        fixedHeight="250px"
        noPagination
        canAdd
        additionalButtons={additionalButtons}
      />
      <Flex width="100%" justifyContent="space-around" align="center">
        <InputNumber
          name="customer_invoice_total"
          disabled
          value={customer_invoice_total}
          label="total"
          width="13%"
        />
        <InputNumber
          name="customer_invoice_design_fee"
          value={customer_invoice_design_fee}
          onChange={handleDesignFee}
          label="dsgnfe"
          width="13%"
        />
        <InputNumber
          name="customer_invoice_discount"
          value={customer_invoice_discount}
          label="dscnt"
          onChange={handleDiscount}
          width="13%"
        />
        <InputNumber
          name="customer_invoice_after_discount"
          disabled
          value={customer_invoice_after_discount}
          label="tlaftrdsnt"
          width="13%"
        />
        <InputNumber
          name="customer_invoice_paid"
          value={customer_invoice_paid}
          label="paid"
          max={customer_invoice_after_discount}
          onChange={handlePaid}
          width="13%"
        />
        <InputNumber
          name="customer_invoice_credit"
          disabled
          value={customer_invoice_credit}
          label="crdt"
          width="13%"
        />
        <Button label="sv" width="15%" onClick={handleValidateInvoiceFelids} />
      </Flex>
    </Flex>
  );
};

export default memo(CustomerInvoices);
