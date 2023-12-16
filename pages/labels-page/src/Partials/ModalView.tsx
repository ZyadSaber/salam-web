import React, { memo, useCallback } from "react";
import { InputText } from "@commons/input-text";
import { useFormManager } from "@commons/hooks";
import { ModalViewProp } from "@commons/global";
import Flex from "@commons/flex";
import { useTableControlsButtons } from "@commons/table";
import { SaveButton } from "@commons/button";

const ModalView = ({ onClose, selectedRow, refreshTable }: ModalViewProp) => {
  const { state, onChange } = useFormManager({
    initialValues: {
      ...selectedRow,
    },
  });
  const { onSaveAndInsertion } = useTableControlsButtons({
    api: "POST_LABELS_TABLE_DATA",
    runFetch: refreshTable,
  });
  const { language_code, english_name, arabic_name, query_status } = state;

  const handleSave = useCallback(() => {
    const record = {
      language_code,
      english_name,
      arabic_name,
      query_status,
    };
    onSaveAndInsertion(record);
    onClose();
  }, [
    language_code,
    english_name,
    arabic_name,
    query_status,
    onSaveAndInsertion,
    onClose,
  ]);

  return (
    <Flex width="100%" padding="0" margin="0" wrap gap="5px">
      <InputText
        label="cod"
        name="language_code"
        onChange={onChange}
        value={language_code}
        width="20%"
        disabled={query_status === "u"}
      />
      <InputText
        label="englshnm"
        name="english_name"
        onChange={onChange}
        value={english_name}
        width="35%"
      />
      <InputText
        label="arbcnm"
        name="arabic_name"
        onChange={onChange}
        value={arabic_name}
        width="35%"
      />
      <SaveButton onClick={handleSave} />
    </Flex>
  );
};

export default memo(ModalView);
