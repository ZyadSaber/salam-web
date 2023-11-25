import React, { memo } from "react"
import TotalCellRender from "./TotalCellRender";
import { StyledTableRowCell } from "../style"

const TableHeader = ({ columns, actionColumn, actionLabel, actionWidth, dataSource }: any) => {

    return (
        <>
                <tr>
                    {
                        columns?.map((record: any) => {
                            return (
                                <>
                                    <StyledTableRowCell>
                                        <TotalCellRender
                                            {...record}
                                            dataSource={dataSource}
                                        />
                                    </StyledTableRowCell>
                                </>
                            )
                        })
                    }
                    {actionColumn &&
                        <StyledTableRowCell isHeadCell>
                            {/* <CellContentWrapper
                                title={actionLabel}
                                width={actionWidth}
                            /> */}
                        </StyledTableRowCell>
                    }
                </tr>
        </>
    )
}

export default memo(TableHeader)