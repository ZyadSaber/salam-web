import React, { memo, useCallback } from "react";
import { InputText } from "@commons/input-text";
import { useFormManager, useValidateForm } from "@commons/hooks";
import { ModalViewProp } from "@commons/global";
import { useTableControlsButtons } from "@commons/table";
import Flex from "@commons/flex";
import { SaveButton } from "@commons/button";

const ModalView = ({ onClose, selectedRow, refreshTable }: ModalViewProp) => {
  const { state, onChange } = useFormManager({
    initialValues: {
      ...selectedRow,
    },
  });
  const { onSaveAndInsertion } = useTableControlsButtons({
    api: "POST_CUSTOMER_TABLE_DATA",
    runFetch: refreshTable,
  });

  const handleSave = useCallback(() => {
    onSaveAndInsertion(state);
    onClose();
  }, [onClose, onSaveAndInsertion, state]);

  const handleValidateFelids = useValidateForm({
    validateFelids: ["customer_name"],
    functionToRun: handleSave,
    stateToValidate: state,
  });

  const { customer_name, phone, address } = state;

  return (
    <Flex flexDirection="column" padding="0" margin="0" >
      <Flex width="100%" padding="0" margin="0" wrap gap="5px">
        <InputText
          name="customer_name"
          label="Name"
          onChange={onChange}
          value={customer_name}
          required
          width="47%"
        />
        <InputText
          name="phone"
          label="Phone"
          onChange={onChange}
          value={phone}
          width="47%"
        />
        <InputText
          name="address"
          label="Address"
          onChange={onChange}
          value={address}
          width="100%"
        />
      </Flex>
      <SaveButton onClick={handleValidateFelids} />
    </Flex>
  );
};

export default memo(ModalView);
