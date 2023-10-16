import { useRef, useCallback } from "react";

const usePdfViewerControl = ()=>{

    const PDFRef = useRef()

    const handleOpenModal = useCallback(async () =>
    //@ts-ignore
    await PDFRef.current?.handleOpen(),
  [PDFRef])

    return {
        PDFRef,
        handleOpenModal
    }
}

export default usePdfViewerControl