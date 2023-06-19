import React, { memo } from "react";
import Flex from "@commons/flex";
import InputText from "@commons/input-text/src/inputText";
import { SelectWithApi } from "@commons/select";
import { TableWithApi } from "@commons/table";
import { columns } from "./constant";
import { useFormManager } from "@commons/hooks";

const ItemSummaryPage = () => {
    const { state, onChange } = useFormManager({ initialValues: { date_from: "", date_to: "", item_id: "" } })
    return (
        <>
            <Flex width="100%" flexDirection="column">
                <Flex width="100%" >
                    <SelectWithApi
                        Label="itm"
                        fetchOnFirstRun
                        name="item_id"
                        value={state.item_id}
                        onChange={onChange}
                        Api="QUERY_ITEMS_LIST"
                    />
                    <InputText
                        name="date_from"
                        type="date"
                        Label="frm"
                        onChange={onChange}
                    />
                    <InputText
                        name="date_to"
                        type="date"
                        Label="to"
                        onChange={onChange}
                    />
                </Flex>
                <TableWithApi
                    api={""}
                    columns={columns}
                    hideTools={true}
                    rowKey={"rowKey"}
                    params={{
                        item_id: state.item_id,
                        date_from: state.date_from,
                        date_to: state.date_to
                    }}
                    fetchOnFirstRun
                />
            </Flex>
        </>
    )
}

export default memo(ItemSummaryPage)