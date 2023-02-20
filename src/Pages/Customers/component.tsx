import { memo } from 'react';
import useCheckUser from '../../hooks/useCheckUser';
import './style.css';
import ModalView from "./Partials/ModalView";
// import FormView from "./Partials/FormView";
import ApiTable from "../../components/TableView/ApiTable";
import { columns } from "./constants"

const Customers = () => {
    const { hidden } = useCheckUser()

    return (
        <>
            <div className="customers" hidden={hidden}>
                <ApiTable
                    api={"QUERY_CUSTOMER_TABLE_DATA"}
                    postApi={"POST_CUSTOMER_TABLE_DATA"}
                    columns={columns}
                    hideTools={false}
                    canEdit={true}
                    canAdd={true}
                    canDelete={true}
                    rowKey={"customer_id"}
                    Modal={ModalView}
                    fetchOnFirstRun
                />
            </div>
        </>)

};

export default memo(Customers);
