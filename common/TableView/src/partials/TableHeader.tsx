import React, { memo } from "react"
// import {BaseTitle} from "@commons/page-title"
import HeadCellRenderer from "./HeadCellRenderer"
import { StyledHeader, StyledTableRowCell } from "../style"

const TableHeader = ({ columns, actionColumn, actionLabel, actionWidth }: any) => {

    return (
        <>
            <StyledHeader>
                <tr>
                    {
                        columns?.map((record: any) => {
                            return (
                                <>
                                    <StyledTableRowCell isHeadCell>
                                        <HeadCellRenderer
                                            {...record}
                                        />
                                    </StyledTableRowCell>
                                </>
                            )
                        })
                    }
                    {actionColumn &&
                        <StyledTableRowCell isHeadCell>
                            <HeadCellRenderer
                                title={actionLabel}
                                width={actionWidth}
                            />
                        </StyledTableRowCell>
                    }
                </tr>
            </StyledHeader>
        </>
    )
}

export default memo(TableHeader)