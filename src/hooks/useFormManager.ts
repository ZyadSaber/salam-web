import {useState, useCallback, useEffect} from "react";

interface useFormManagerProps {
    initialValue?: any
    setSelectedRow?: any
}

const useFormManager =({initialValue, setSelectedRow}: useFormManagerProps)=>{
    const [initialValues, setInitialValues] = useState()
    const [state, setState] = useState<typeof initialValue>({})

    const onChange = useCallback((change: any)=>{
        //@ts-ignore
            if (setSelectedRow)setSelectedRow({...initialValue, [change.name]: change.value})
            setState({...state, [change.name]: change.value})
            setInitialValues(initialValues)
    },[initialValues, initialValue, setSelectedRow, state])

    useEffect(()=>{
        if(setSelectedRow){
            setState(initialValue);
        }
    },[initialValue, setSelectedRow])

    useEffect(()=>{
        setState(initialValue);
    },[])

    const resetState = useCallback(()=>{
        setSelectedRow(initialValues)
    },[initialValues, setSelectedRow])

    return{state, onChange, resetState}
}

export default useFormManager