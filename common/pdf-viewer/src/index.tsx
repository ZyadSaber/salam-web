import React, {memo} from "react";
import Modal from "@commons/modal";

//TODO: implement pdf viewer type
const PdfViewer = ({visible, onClose}:any) => {
    return(
        <Modal
            label="PDF Viewer"
            visible={true}
            onClose={onClose}
            hideCloseButton
            hideSaveButton
            width="6xl"
        >
            {/* <iframe title="PDF Viewer" src="http://144.24.209.19:9090/api/invoices/customer_invoice/files" style={{height:"100%"}}></iframe> */}
            <object data={"http://144.24.209.19:9090/api/invoices/customer_invoice/files"} width="100%" height="100%">
          {`Your browser does not support pdf files.`}
        </object>
        </Modal>
    )
}

export default memo(PdfViewer)
export * from "./interface"
