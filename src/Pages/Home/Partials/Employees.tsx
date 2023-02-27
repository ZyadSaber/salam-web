import { memo, useState } from "react";
import Text from "../../../components/pageTitle/text";
import LinkButton from "../../../components/button/LinkButton";
import Flex from "../../../components/Flex/Flex";
import Button from "../../../components/button/button";
import EmployeeAttendance from "../../../Pages/employeeAttendance/component";
import EmployeeLeaving from "../../../Pages/employeeLeaving/component";

const Employees = () => {
    const [modalProps, setModalProps] = useState<any>({
    })
    const handleClickModal = (modal: string) => {
        setModalProps({ [modal]: true })
    }
    const handleCloseModal = () => {
        setModalProps({})
    }
    return (
        <>
            <EmployeeAttendance
                visible={modalProps.employeeAttendance}
                handleCloseModal={handleCloseModal}
            />
            <EmployeeLeaving
                visible={modalProps.employeeLeaving}
                handleCloseModal={handleCloseModal}
            />
            <Text title="emplys" margin="20px 10px" />
            <Flex justifyContent="space-around" width="40%" margin="30px" borderd>
                <Button label="emplyatndnc" width="40%" onClick={() => { handleClickModal("employeeAttendance") }} />
                <Button label="emplylvng" width="40%" onClick={() => { handleClickModal("employeeLeaving") }} />
            </Flex>
            <Flex justifyContent="space-around" width="40%" margin="30px" borderd>
                <LinkButton label="emplyslry" pathTo="employeeSalary" width="40%" />
                <LinkButton label="emplydat" pathTo="employeeData" width="40%" />
            </Flex>
        </>
    )
}

export default memo(Employees)