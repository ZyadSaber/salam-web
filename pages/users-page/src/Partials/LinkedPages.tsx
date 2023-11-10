import React, { memo, useCallback, useEffect, useState } from "react";
import Flex from "@commons/flex";
import { useFetch, useMutation } from "@commons/hooks";
import { CheckBox } from "@commons/check-box";
import { Button } from "@commons/button";

const LinkedPages = ({ row }: any) => {

    const [clonedPages, setClonedPages] = useState<any[]>();

    const { runFetch } = useFetch({
        link: "QUERY_PAGE_NAME_LIST_TO_VIEW",
        onResponse: setClonedPages,
        params: {
            user_id: row.id
        }
    });

    const { setRow } = useMutation({
        link: "POST_USER_PAGE_PERMISSIONS",
        additionalFunctionToRun: runFetch,
    });

    const handleChange = useCallback((event: any) => {
        const newArr = clonedPages && clonedPages.map(item => {
            if (event.name === item.page_id) {
                return {
                    ...item,
                    status: event.value
                };
            }
            return item;
        });
        setClonedPages(newArr)
    }, [clonedPages]);

    useEffect(() => {
        runFetch({
            user_id: row.id
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [row.id])

    const handleSavePages = useCallback(() => {
        setRow(clonedPages)
    }, [clonedPages, setRow])

    return (
        <Flex
            width="40%"
            flexDirection="column"
        >
            <Button
                onClick={handleSavePages}
                width="100%"
                label="save"
            />
            <Flex
                width="100%"
                flexDirection="column"
                height="600px"
                bordered
                margin="5px"
                borderColor="white"
                overflow={"scroll"}
            >
                {
                    row.id && clonedPages?.length &&
                    clonedPages.map((record) => (
                        <CheckBox
                            name={record.page_id}
                            label={`${record.page_name} / ${record.page_link}`}
                            value={record.status}
                            onChange={handleChange}
                        />
                    ))
                }
            </Flex>
        </Flex>
    )
}

export default memo(LinkedPages)