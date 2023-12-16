import React, { memo, useCallback } from "react";
import { InputText } from "@commons/input-text";
import { useFormManager } from "@commons/hooks";
import { ModalViewProp } from "@commons/global";
import { useTableControlsButtons } from "@commons/table";
import { SaveButton } from "@commons/button";
import { CheckBox } from "@commons/check-box";
import Flex from "@commons/flex";
import { SelectWithApi } from "@commons/select";

const ModalView = ({ onClose, selectedRow, refreshTable }: ModalViewProp) => {
  const { state, onChange } = useFormManager({
    initialValues: {
      ...selectedRow,
    },
  });
  const { onSaveAndInsertion } = useTableControlsButtons({
    api: "POST_PAGE_NAME_MAIN_TABLE",
    runFetch: refreshTable,
  });

  const handleSave = useCallback(() => {
    onSaveAndInsertion(state);
    onClose();
  }, [onSaveAndInsertion, state, onClose]);

  const { page_link, page_parent_id, page_name, page_disabled, run_in_modal } =
    state;

  return (
    <Flex flexDirection="column" width="100%">
      <Flex width="100%" wrap gap="10px" padding="0 0 10px">
        <InputText
          name="page_name"
          label="nm"
          onChange={onChange}
          value={page_name}
          width="47%"
        />
        <InputText
          name="page_link"
          label="pglnk"
          onChange={onChange}
          value={page_link}
          width="47%"
        />
        <SelectWithApi
          api="QUERY_PAGE_PARENT_LIST"
          name="page_parent_id"
          label="prntnm"
          onChange={onChange}
          value={page_parent_id}
          width="47%"
          fetchOnFirstRun
        />
        <CheckBox
          name="page_disabled"
          label="pgdsbld"
          onChange={onChange}
          value={page_disabled}
        />
        <CheckBox
          name="run_in_modal"
          label="rninmdl"
          onChange={onChange}
          value={run_in_modal}
        />
      </Flex>
      <SaveButton onClick={handleSave} width="15%" />
    </Flex>
  );
};

export default memo(ModalView);
