import React, {memo} from "react"
// import {BaseTitle} from "@commons/page-title"
import HeadCellRenderer from "./HeadCellRenderer"
import {StyledHeader, StyledTableRowCell } from "../style"

const TableHeader = ({columns, actionColumn, actionLabel, actionWidth}:any)=>{

    return(
        <>
            <StyledHeader>
                <tr>
                {
                    columns?.map((record: any)=>{
                        return(
                            <>
                                <StyledTableRowCell>
                                    <HeadCellRenderer
                                     {...record}
                                     />
                                    </StyledTableRowCell>
                            </>
                        )
                    })
                }
                {/* {actionColumn && <th style={{maxWidth: actionWidth, width: actionWidth}}><BaseTitle margin="2px 0" value={actionLabel} width="100%" /></th>} */}
                </tr>
            </StyledHeader>
        </>
    )
}

export default memo(TableHeader)