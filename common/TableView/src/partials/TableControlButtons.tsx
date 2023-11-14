import React, { memo } from "react";
import Flex from "@commons/flex";
import { Button, IconButton } from "@commons/button";
import { tableControlButtonsProp } from "../interface";

const TableControlButtons = ({
  hideTools = false,
  canAdd,
  canEdit,
  canDelete,
  canSave,
  canPrint,
  canExcel,
  onAdd,
  onEdit,
  onDelete,
  onSave,
  onPrint,
  onExcel,
  addDisabled,
  editDisabled,
  deleteDisabled,
  saveDisabled,
  printDisabled,
  excelDisabled,
  additionalButtons,
}: tableControlButtonsProp) => {
  return (
    <Flex
      width="100%"
      padding="0"
      margin="0"
      bordered
      borderColor="red"
      justifyContent="center"
      hidden={hideTools}
    >
      {additionalButtons &&
        Array.isArray(additionalButtons) &&
        additionalButtons.map((record) => {
          if (record.icon) {
            return (
              <IconButton
                iconName={record.icon}
                onClick={record.onClick}
                width={record.width}
              />
            );
          } else {
            return (
              <Button
                label={record.label}
                onClick={record.onClick}
                width={record.width}
              />
            );
          }
        })}
      <IconButton
        iconName="delete"
        onClick={onDelete}
        hidden={!canDelete}
        disabled={deleteDisabled}
      />
      <IconButton
        iconName="edit"
        onClick={onEdit}
        hidden={!canEdit}
        disabled={editDisabled}
      />
      <IconButton
        iconName="plus"
        onClick={onAdd}
        hidden={!canAdd}
        disabled={addDisabled}
      />
      <IconButton
        iconName="save"
        onClick={onSave}
        hidden={!canSave}
        disabled={saveDisabled}
      />
      <IconButton
        iconName="print"
        onClick={onPrint}
        hidden={!canPrint}
        disabled={printDisabled}
      />
      <IconButton
        iconName="excel"
        onClick={onExcel}
        hidden={!canExcel}
        disabled={excelDisabled}
      />
    </Flex>
  );
};

export default memo(TableControlButtons);
