import React, { memo, useState } from "react";
import ModalView from "./Partials/ModalView";
import { TableWithApi } from "@commons/table";
import Flex from "@commons/flex";
import LinkedPages from "./Partials/LinkedPages";
import { columns } from "./constants";
const UsersPage = () => {
  const [row, setRow] = useState({});

  return (
    <>
      <Flex width="100%" margin="0" padding="0" gap="10px">
        <TableWithApi
          api={"QUERY_USERS_TABLE_DATA"}
          postApi={"POST_USERS_TABLE_DATA"}
          columns={columns}
          hideTools={false}
          canEdit={true}
          canAdd={true}
          canDelete={true}
          canExcel
          rowKey={"id"}
          ModalContent={ModalView}
          onClick={setRow}
          fetchOnFirstRun
          width="80%"
        />

        <LinkedPages row={row} />
      </Flex>
    </>
  );
};

export default memo(UsersPage);
