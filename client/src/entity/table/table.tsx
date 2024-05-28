import {FC} from "react";
import styles from "./table.module.scss"

interface TableInterface {
    name: string;
    minimumCount: number;
    minimumPrice: number;
    maximumPrice: number;
    currentCount: number;

}
const Table:FC<TableInterface> = ({name, minimumCount, minimumPrice, maximumPrice}) => {
    return (
        <table>
            <thead>
            <tr>
                <th scope="col">Название</th>
                <th scope="col">Минимальное количество</th>
                <th scope="col">Минимальная цена</th>
                <th scope="col">Максимальная цена</th>
                <th scope="col">Склад</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">OMNILYX</th>
                <td><input/></td>
                <td><input type="text"/></td>
                <td><input type="text"/></td>
                <td><input type="date"/></td>
            </tr>
            </tbody>
        </table>
    );
};

export default Table;