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
                    api={"QUERY_PRINT_OPTIONS_TABLE_DAT"}
                    postApi={"POST_PRINT_OPTIONS_TABLE_DATA"}
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