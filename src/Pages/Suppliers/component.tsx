import { memo } from 'react';
import useCheckUser from '../../hooks/useCheckUser';
import ModalView from "./Partials/ModalView";
// import FormView from "./Partials/FormView";
import ApiTable from "../../components/TableView/ApiTable";
import { columns } from "./constants";

const Suppliers = () => {
    const { hidden } = useCheckUser()
    return (
        <>
            <div className="Suppliers" hidden={hidden}>
                <ApiTable
                    api={"QUERY_SUPPLIER_TABLE_DATA"}
                    postApi={"POST_SUPPLIER_TABLE_DATA"}
                    columns={columns}
                    hideTools={false}
                    canEdit={true}
                    canAdd={true}
                    canDelete={true}
                    rowKey={"supplier_id"}
                    Modal={ModalView}
                    fetchOnFirstRun
                />
            </div>
        </>
    )
};

export default memo(Suppliers);
