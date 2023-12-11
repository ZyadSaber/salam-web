import { useCallback } from "react";

interface useValidateFormProp {
  validateFelids: string[];
  functionToRun: () => void;
  stateToValidate: any;
}

const useValidateForm = ({
  validateFelids,
  functionToRun,
  stateToValidate,
}: useValidateFormProp) => {
  // const toast = useToast();

  const handleValidateFelids = useCallback(() => {
    let newARR: string[] = [];
    validateFelids.forEach((felid) => {
      if (stateToValidate[felid] !== undefined && !stateToValidate[felid]) {
        newARR.push(felid);
      }
    });

    newARR.length !== 0
      ? window.alert(`
      Make sure to fill this required fields
       ${newARR.toString()}
     `)
      : // toast({
        //   position: "top-right",
        //   title: "Error",
        //   description: `
        //   Make sure to fill this required fields
        //   ${newARR.toString()}
        //   `,
        //   status: "info",
        //   duration: 5000,
        //   isClosable: true,
        // })
        functionToRun();
  }, [functionToRun, stateToValidate, validateFelids]);

  return handleValidateFelids;
};

export default useValidateForm;
