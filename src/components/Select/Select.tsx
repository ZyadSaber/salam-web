import { memo } from "react";
import { useTranslation } from 'react-i18next';
interface SelectProps {
    Option?: {
        label: string,
        value: number
    };
    Options: {
        label: string,
        value: number
    }[]
    onChange?: any;
    Label?: string;
    value?: number;
    name: string;
    width?: number | string;
    withLabel?: boolean;
    margin?: number | string;
    padding?: number | string
}



const Select = ({
    width = "200px",
    Options,
    onChange,
    Label,
    value = 0,
    name,
    withLabel = false,
    margin = "10px",
    padding
}: SelectProps) => {
    const { t } = useTranslation()
    //@ts-ignore
    const handleValue = (event) => {
        // eslint-disable-next-line array-callback-return
        Options.map((option) => {
            if (option.value === +event.target.value) {
                if (withLabel) {
                    onChange({ value: option.value, label: option.label, name: name })
                } else {
                    onChange({ value: option.value, name: name })
                }
            }
        })
    }

    return (
        <>
            <div className="mb-1" style={{ width: width, padding: padding, margin: margin }}>
                <label htmlFor="exampleFormControlInput1" className="form-label">{t(Label)}</label>
                <select className="form-select" aria-label="Default select example" onChange={handleValue}>
                    <option selected>{`Select`}</option>
                    {Options.map((Option) => {
                        return (
                            <option key={Option.value} value={Option.value} selected={value === Option.value && true}> {t(Option.label)}</option>
                        )
                    })}
                </select>
            </div>
        </>
    )
}

export default memo(Select)