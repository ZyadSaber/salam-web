import { memo } from 'react';
import "./style.css";
import Button from "../../components/button/button"

interface TableProps {
    key?: string | number;
    dataSource: any[];
    columns: column[];
    title?: string;
    hideEdit?: boolean;
    hideAdd?: boolean;
    hideDelete?: boolean;
    hideTools?: boolean;
    onAdd?: () => void;
    onEdit?: () => void | any;
    onDelete?: () => void;
}

interface column {
    title: string,
    width?: number,
    dataIndex: string,
}

const Table = ({
    dataSource,
    columns,
    key,
    title,
    hideTools = true,
    hideEdit = true,
    hideAdd = true,
    hideDelete = true,
    onAdd,
    onEdit,
    onDelete

}: TableProps) => {
    return (
        <>
            <div className="Table">
                <section>
                    <h1>{title}</h1>
                    <div className="tbl-header">
                        <table>
                            <thead>
                                <tr>

                                    {columns.map((item: any) => {
                                        return (
                                            <th>{item.title}</th>
                                        )
                                    })}
                                    <th hidden={hideTools}>Actions</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="tbl-content">
                        <table>
                            <tbody>
                                {dataSource.map((item: any) => {
                                    return (
                                        <tr key={key}>
                                            {/* {
                                                columns.map((dataIndex) => {
                                                    return (
                                                        <td>
                                                            {item.dataIndex.dataIndex}
                                                        </td>
                                                    )
                                                })
                                            } */}
                                            <td hidden={hideTools}>
                                                <div className="btns">
                                                    <Button
                                                        label="Edit"
                                                        hidden={hideEdit}
                                                        onClick={onEdit}
                                                    />
                                                    <Button
                                                        label="Delete"
                                                        hidden={hideDelete}
                                                        onClick={onDelete}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </>
    )
}

export default memo(Table);
