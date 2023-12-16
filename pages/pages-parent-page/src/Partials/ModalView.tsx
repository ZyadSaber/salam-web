import React, { memo, useCallback } from "react";
import { InputText } from "@commons/input-text";
import { useFormManager, useValidateForm } from "@commons/hooks";
import { ModalViewProp } from "@commons/global";
import { useTableControlsButtons } from "@commons/table";
import { SaveButton } from "@commons/button";
import { CheckBox } from "@commons/check-box";
import Flex from "@commons/flex";

const ModalView = ({ onClose, selectedRow, refreshTable }: ModalViewProp) => {
  const { state, onChange } = useFormManager({
    initialValues: {
      ...selectedRow,
    },
  });
  const { onSaveAndInsertion } = useTableControlsButtons({
    api: "POST_PAGES_PARENT_DATA_TABLE",
    runFetch: refreshTable,
  });

  const handleSave = useCallback(() => {
    onSaveAndInsertion(state);
    onClose();
  }, [onSaveAndInsertion, state, onClose]);

  const handleValidateFelids = useValidateForm({
    validateFelids: ["page_parent_name", "hidden"],
    functionToRun: handleSave,
    stateToValidate: state,
  });

  const { page_parent_name, hidden } = state;

  return (
    <Flex width="100%" padding="0" margin="0" wrap gap="5px">
      <InputText
        name="page_parent_id"
        label="page_parent_id"
        onChange={onChange}
        value={state.page_parent_id}
        width="20%"
        disabled
      />
      <InputText
        label="pgprnt"
        name="page_parent_name"
        onChange={onChange}
        value={page_parent_name}
        width="40%"
      />
      <CheckBox name="hidden" label="hdn" onChange={onChange} value={hidden} />
      <SaveButton onClick={handleValidateFelids} />
    </Flex>
  );
};

export default memo(ModalView);
