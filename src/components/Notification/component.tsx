import { memo, useEffect, useState } from "react";

interface notificationProp {
    Label?: string;
    body?: any;
    duration?: number;
    additionalMessage?: any
}

const Notification = ({
    Label = "Message",
    body,
    duration = 5000,
    additionalMessage
}: notificationProp) => {

    const [visible, setVisible] = useState<boolean>(false)
    const [message, setMessage] = useState({
        response: "NULL"
    })

    const closeNotification = () => {
        setVisible(false)
        console.log("xx")
    }

    useEffect(() => {
        if (body) {
            setMessage(body)
            setVisible(true)
            setTimeout(closeNotification, duration)
        }
    }, [body, duration])

    return (
        <>
            <div aria-live="polite" aria-atomic="true" className="position-fixed right-0 w-100" style={{
                top: "50px"
            }}>
                <div className="toast-container end-0 p-3">

                    <div className={`${visible ? "show" : ""} toast fade `} role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <strong className="me-auto">{Label}</strong>
                            {/* top right corner of the component  */}
                            {/* <small className="text-muted"></small> */}
                            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" onClick={closeNotification}></button>
                        </div>
                        <div className="toast-body">
                            {message.response}
                            {message.response && <br />}
                            {additionalMessage?.map((item: any) => {
                                //@ts-ignore
                                return (message[item])
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Notification)