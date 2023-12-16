import React, { memo, useCallback } from "react";
import { InputText } from "@commons/input-text";
import { useFormManager } from "@commons/hooks";
import { ModalViewProp } from "@commons/global";
import { useTableControlsButtons } from "@commons/table";
import { SaveButton } from "@commons/button";
import Flex from "@commons/flex";

const ModalView = ({ onClose, selectedRow, refreshTable }: ModalViewProp) => {
  const { state, onChange } = useFormManager({
    initialValues: {
      ...selectedRow,
    },
  });
  const { onSaveAndInsertion } = useTableControlsButtons({
    api: "POST_USERS_TABLE_DATA",
    runFetch: refreshTable,
  });
  const {
    id,
    password,
    confirm_password,
    user_name,
    first_name,
    last_name,
    user_role,
    query_status,
  } = state;

  const handleSave = useCallback(() => {
    const record = {
      user_name,
      first_name,
      last_name,
      user_role,
      id,
      query_status,
      password,
    };
    if (password === confirm_password) {
      onSaveAndInsertion(record);
      onClose();
    }
  }, [
    user_name,
    first_name,
    last_name,
    user_role,
    id,
    query_status,
    password,
    confirm_password,
    onSaveAndInsertion,
    onClose,
  ]);

  return (
    <Flex width="100%" wrap gap="10px">
      <InputText
        label="frstnm"
        name="first_name"
        value={first_name}
        onChange={onChange}
        width="49%"
      />
      <InputText
        label="scndnm"
        name="last_name"
        value={last_name}
        onChange={onChange}
        width="49%"
      />
      <InputText
        label="usrnm"
        name="user_name"
        value={user_name}
        onChange={onChange}
        width="49%"
      />
      <InputText
        label="pswrd"
        name="password"
        value={password}
        onChange={onChange}
        width="49%"
        type="password"
      />
      <InputText
        label="cnfrmpswrd"
        name="confirm_password"
        value={confirm_password}
        onChange={onChange}
        width="49%"
        type="password"
      />
      <SaveButton onClick={handleSave} />
    </Flex>
  );
};

export default memo(ModalView);
