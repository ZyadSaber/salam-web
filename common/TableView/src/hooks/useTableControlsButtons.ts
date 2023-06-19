import { useCallback } from "react";
import { useMutation } from "@commons/hooks";

const useTableControlsButtons = ({ api = "", runFetch }: any) => {
  const { setRow: newRecord } = useMutation({
    link: api,
    additionalFunctionToRun: runFetch,
    method: "POST",
  });
  const { setRow: updateRecord } = useMutation({
    link: api,
    additionalFunctionToRun: runFetch,
    method: "PUT",
  });
  const { setRow: deleteRecord } = useMutation({
    link: api,
    additionalFunctionToRun: runFetch,
    method: "Delete",
  });

  const onSaveAndInsertion = useCallback(
    (record: any) => {
      if (record.query_status === "n") {
        newRecord(record);
      } else if (record.query_status === "u") {
        updateRecord(record);
      } else if (record.query_status === "d") {
        deleteRecord(record);
      }
    },
    [newRecord, updateRecord, deleteRecord]
  );

  return { onSaveAndInsertion };
};

export default useTableControlsButtons;
