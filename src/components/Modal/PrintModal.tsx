import { memo, useCallback } from "react"
import Modal from "./Modal";

const PrintModal = () => {

    const handleOnOk = useCallback(() => {
        window.print()
    }, [])

    return (
        <Modal
            label="print"
            visible={false}
            onOK={handleOnOk}
            submitTitle="Print"
        >

        </Modal>
    )
}

export default memo(PrintModal)