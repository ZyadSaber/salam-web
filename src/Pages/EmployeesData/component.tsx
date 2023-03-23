import { memo } from 'react';
import ModalView from "./Partials/ModalView";
import ApiTable from "../../components/TableView/ApiTable";
import { columns } from "./constants";

const EmployeesData = () => {
    return (
        <>
            <ApiTable
                api={"QUERY_EMPLOYEES_TABLE_DATA"}
                postApi={"POST_EMPLOYEES_TABLE_DATA"}
                columns={columns}
                hideTools={false}
                canEdit={true}
                canAdd={true}
                canDelete={true}
                rowKey={"employee_id"}
                Modal={ModalView}
                fetchOnFirstRun
            />
        </>
    )

};

export default memo(EmployeesData);
