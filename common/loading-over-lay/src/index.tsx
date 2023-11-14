import React, { memo } from "react";
import {Loading, Overlay} from "./style"

const LoadingOverLay = ({opacity, visible, backColor}:any) => {

    return (
        <Overlay
        opacity={opacity}
        visible={visible}
        backColor={backColor}
        >
            <Loading/>
        </Overlay>
    )
}

export default memo(LoadingOverLay)