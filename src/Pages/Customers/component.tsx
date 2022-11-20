import { memo } from 'react';
import Header from '../../components/Header/component';
import Footer from '../../components/Footer/component';
import useCheckUser from '../../hooks/useCheckUser';
import './style.css';
import ModalView from "./Partials/ModalView";
// import FormView from "./Partials/FormView";
import ApiTable from "../../components/TableView/ApiTable";
import { columns } from "./constants"

const Customers = () => {
    const { hidden } = useCheckUser()

    return (<>
        <Header />
        <div className="customers" hidden={hidden}>
            <ApiTable
                api={"basicData/customers"}
                postApi={"basicData/customers_dml"}
                columns={columns}
                hideTools={false}
                canEdit={true}
                canAdd={true}
                canDelete={true}
                rowKey={"customer_id"}
                Modal={ModalView}
            />
        </div>
        <Footer />
    </>)

};

export default memo(Customers);
