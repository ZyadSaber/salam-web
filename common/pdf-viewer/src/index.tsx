import React, {memo, useImperativeHandle, forwardRef, useState, useCallback} from "react";
import Modal from "@commons/modal";

//TODO: implement pdf viewer type
const PdfViewer = ({
        reportName,
        params
    }:any,
    ref: any
    ) => {

        const [visible, setVisible] = useState(false);
        
        const handleOpen = useCallback(()=>{
            setVisible(true);
        },[])

        const handleClose = useCallback(()=>{
            setVisible(false);
        },[])

        useImperativeHandle(ref, () => ({
            handleOpen,
            // setTableData: setData,
            // resetTableData: resetData,
            // getCurrentDataSource: data
        }));

        const computedUrl =`http://192.168.1.250:5000/system_pdf_generate/${reportName}?${new URLSearchParams(params)}`

    return(
        <Modal
            label="PDF Viewer"
            visible={visible}
            onClose={handleClose}
            noFooter
            width="90%"
            height="80%"
        >
            <object data={computedUrl} width="100%" height="100%">
          {`Your browser does not support pdf files.`}
        </object>
        </Modal>
    )
}

export default memo(forwardRef(PdfViewer))
export * from "./interface"
export {default as usePdfViewerControl} from "./hooks/usePdfViewerControl";
