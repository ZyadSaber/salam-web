import { memo } from "react";
import ApiTable from "../../components/TableView/ApiTable";
import { columns } from "./constants";
import useCheckUser from '../../hooks/useCheckUser';
import ModalView from "./Partials/ModalView";


const PrintOptions = () => {

    const { hidden } = useCheckUser()

    return (
        <>
            <div className="Suppliers" hidden={hidden}>
                <ApiTable
                    api={"basicData/print_options"}
                    postApi={"basicData/print_options_dml"}
                    columns={columns}
                    hideTools={false}
                    canEdit={true}
                    canAdd={true}
                    canDelete={true}
                    rowKey={"print_id"}
                    Modal={ModalView}
                    fetchOnFirstRun
                />
            </div>
        </>
    )
}

export default memo(PrintOptions);