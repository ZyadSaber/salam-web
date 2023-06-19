import { useState, useCallback } from "react";
import { useLocalStorage } from "@commons/hooks";
import { API_ID } from "@commons/global";
import { useToast } from "@chakra-ui/react";

interface useMutationProps {
  link: string;
  noAuthorization?: boolean;
  additionalFunctionToRun?: () => void;
  runOnSuccess?: () => void;
  runOnFail?: () => void;
  method?: string;
}
interface successType {
  response: string;
}

const useMutation = ({
  link = "",
  noAuthorization = false,
  additionalFunctionToRun,
  runOnSuccess,
  runOnFail,
  method = "POST",
}: useMutationProps) => {
  const toast = useToast();
  //@ts-ignore
  const url = `http://144.24.209.19:9090/api/${API_ID[link]}`;
  const [success, setSuccess] = useState<successType>();
  const { authorization } = useLocalStorage();
  const postData = useCallback(
    async (dataToPost: any) => {
      if (authorization || noAuthorization) {
        const settings = {
          method: method,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${authorization}`,
          },
          body: JSON.stringify(dataToPost),
        };
        try {
          const fetchResponse = await fetch(url, settings);
          const data = await fetchResponse.json();
          if (data.response === "success") {
            toast({
              position: "top-right",
              title: "Success",
              description: `${data.response}`,
              status: "success",
              duration: 5000,
              isClosable: true,
            });
            if (runOnSuccess) runOnSuccess();
          } else {
            toast({
              position: "top-right",
              title: "Error",
              description: `${data.message}`,
              status: "error",
              duration: 9000,
              isClosable: true,
            });
            if (runOnFail) runOnFail();
          }
          setSuccess(data);
          if (additionalFunctionToRun) {
            additionalFunctionToRun();
          }
          return data;
        } catch (e) {}
      }
    },
    [
      additionalFunctionToRun,
      authorization,
      method,
      noAuthorization,
      runOnFail,
      runOnSuccess,
      toast,
      url,
    ]
  );

  const setRow = useCallback(
    (row: any) => {
      postData(row);
    },
    [postData]
  );

  return { success, setRow };
};

export default useMutation;
