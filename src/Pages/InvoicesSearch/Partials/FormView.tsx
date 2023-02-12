import { memo } from "react";
import RadioBox from "../../../components/radioBox/component";
import { RadioBoxOptions } from "../constant";
import SelectWithApi from "../../../components/Select/SelectWithApi";
import InputText from "../../../components/InputText/InputText";

const FormView = ({ changeSearchParams, searchParams }: any) => {
    return (
        <>
            <div className="formView">
                <RadioBox
                    name="invoice_type"
                    options={RadioBoxOptions}
                    value={searchParams.invoice_type}
                    onChange={changeSearchParams}
                    Label="Invoice Type"
                />
                <InputText
                    name="invoice_number"
                    Label="No."
                    onChange={changeSearchParams}
                    type="number"
                    value={searchParams.invoice_number}
                />
                <SelectWithApi
                    name="person_id"
                    Api="invoices/get_customer_supplier_list"
                    Label="name"
                    params={{
                        invoice_type: searchParams.invoice_type
                    }}
                    value={searchParams.name}
                />
                <InputText
                    name="date_from"
                    value={searchParams.date_from}
                    Label="Date From"
                    onChange={changeSearchParams}
                    type="date"
                />
                <InputText
                    name="date_to"
                    value={searchParams.date_to}
                    Label="Date To"
                    onChange={changeSearchParams}
                    type="date"
                />
            </div>
        </>
    )
}

export default memo(FormView)