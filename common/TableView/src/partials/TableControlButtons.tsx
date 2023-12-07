import React, { memo } from "react";
import Flex from "@commons/flex";
import { Button, IconButton } from "@commons/button";
import { primaryColors } from "@commons/global";
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
  const { danger, primary } = primaryColors;
  return (
    <Flex
      width="100%"
      padding="0"
      margin="5px 0"
      // bordered
      borderColor="red"
      justifyContent="center"
      hidden={hideTools}
      gap="10px"
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
                backGround="transparent"
                color={primary}
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
        iconName="edit"
        onClick={onEdit}
        hidden={!canEdit}
        disabled={editDisabled}
        backGround="transparent"
        color={primary}
      />
      <IconButton
        iconName="delete"
        onClick={onDelete}
        hidden={!canDelete}
        disabled={deleteDisabled}
        backGround="transparent"
        color={danger}
      />
      <IconButton
        iconName="plus"
        onClick={onAdd}
        hidden={!canAdd}
        disabled={addDisabled}
        backGround="transparent"
        color={primary}
      />
      <IconButton
        iconName="save"
        onClick={onSave}
        hidden={!canSave}
        disabled={saveDisabled}
        backGround="transparent"
        color={primary}
      />
      <IconButton
        iconName="print"
        onClick={onPrint}
        hidden={!canPrint}
        disabled={printDisabled}
        backGround="transparent"
        color={primary}
      />
      <IconButton
        iconName="excel"
        onClick={onExcel}
        hidden={!canExcel}
        disabled={excelDisabled}
        backGround="transparent"
        color={primary}
      />
    </Flex>
  );
};

export default memo(TableControlButtons);
