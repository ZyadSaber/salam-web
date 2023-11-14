import { useLocation } from "react-router-dom";
import * as XLSX from "xlsx";

const useCreateExcel = ({
  fileName,
  dataSource,
  columns
}: any) =>{
  const { pathname } = useLocation();

    const createExcelFun = ()=>{
        const pathName = pathname.replace("/", "");
        const wb = XLSX.utils.book_new(),
          //@ts-ignore
          ws = XLSX.utils.json_to_sheet(dataSource);
        XLSX.utils.book_append_sheet(wb, ws, pathName);
        XLSX.writeFile(wb, fileName);
    }

    return createExcelFun
}

export default useCreateExcel