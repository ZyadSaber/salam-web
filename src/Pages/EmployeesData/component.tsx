import { memo } from 'react';
import ModalView from "./Partials/ModalView";
import { columns } from "./constants";
import ApiTable from "../../components/TableView/ApiTable";

const EmployeesData = () => {
    return (<>
        <div className="customers">
            <ApiTable
                api={"employeesData/employees"}
                postApi={"employeesData/employees_dml"}
                columns={columns}
                hideTools={false}
                canEdit={true}
                canAdd={true}
                canDelete={true}
                rowKey={"employee_id"}
                Modal={ModalView}
                fetchOnFirstRun
            />
        </div>
    </>)

};

export default memo(EmployeesData);
