import { memo, useState } from 'react';
import EmployeeAttendance from "../../Pages/employeeAttendance/component";
import EmployeeLeaving from "../../Pages/employeeLeaving/component";
import Button from "../../components/button/button";
import "./style.css"

const Home = () => {
    const [modalProps, setModalProps] = useState<any>({});


    const handleClickModal = (modal: string) => {
        setModalProps({ [modal]: true })
    }
    const handleCloseModal = () => {
        setModalProps({})
    }

    return (
        <>
            <div className="main">
                <div className='side-bar' >
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><Button label='bscdat' width='100%' onClick={() => { }} /></li>
                        <li className="list-group-item"><Button label='invcs' width='100%' onClick={() => { }} /></li>
                        <li className="list-group-item"><Button label='emplys' width='100%' onClick={() => { }} /></li>
                        <li className="list-group-item"><Button label='emplys' width='100%' onClick={() => { }} /></li>
                        <li className="list-group-item"><Button label='acntsmry' width='100%' onClick={() => { }} /></li>
                    </ul>
                </div>
                <div className='button-actions'>
                    <Button
                        label='w'
                    />
                </div>
            </div>
        </>
    )
};

export default memo(Home);
