import { useState, useCallback, useEffect, useRef } from "react";
import usePrevious from "./usePrevious";

interface useFormManagerProps {
  initialValues?: any;
}

const useFormManager = ({ initialValues }: useFormManagerProps) => {
  const [state, setState] = useState<typeof initialValues>(initialValues);

  const hasAnyFieldChangedRef = useRef(false);
  const preValues = usePrevious(initialValues);

  const areInitialValuesChanged = useCallback(
    () => !Object.is(JSON.stringify(preValues), JSON.stringify(initialValues)),
    [initialValues, preValues]
  );

  useEffect(() => {
    if (areInitialValuesChanged()) {
      setState({ ...initialValues });
    }
  }, [areInitialValuesChanged, initialValues]);

  const resetForm = useCallback(() => {
    hasAnyFieldChangedRef.current = false;
    setState(() => initialValues);
    // @ts-ignore
  }, [initialValues]);

  useEffect(
    () => {
      return resetForm;
    },
    // eslint-disable-next-line
    []
  );

  const onChange = useCallback(
    (eventData: any) => {
      const { name, value } = eventData;
      setState({ ...state, [name]: value });
    },
    [state]
  );

  const handleMultiInput = useCallback((e:any)=>{
    setState({
      ...state,
      ...e
    })
  },[state])

  const handleSelectWithLabelChange = useCallback(
    (eventData: any) => {
      setState({
        ...state,
        [eventData.name]: eventData.value,
        [eventData.selectLabelName]: eventData.label,
      });
    },
    [state]
  );

  const handleArrayChange = useCallback(
    ({ name, value }: any) => {
      setState({ ...state, [name]: [...state[name], value] });
    },
    [state]
  );

  return {
    state,
    onChange,
    resetForm,
    handleRootState: setState,
    handleSelectWithLabelChange,
    handleArrayChange,
    handleMultiInput
  };
};

export default useFormManager;
