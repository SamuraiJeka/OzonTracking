import {FC} from "react";
import styles from "./table.module.scss"


const Table:FC = () => {

    const testArray = [
        {
            name: "Check",
            minimumCount: 1235,
            minimumPrice: 2000,
            maximumPrice: 2000,
            currentCount: 125,
        },
        {
            name: "Another",
            minimumCount: 135,
            minimumPrice: 2000,
            maximumPrice: 2000,
            currentCount: 125,
        },{
            name: "Check",
            minimumCount: 15,
            minimumPrice: 2000,
            maximumPrice: 2000,
            currentCount: 125,
        },
    ]

    return (
        <table className={styles.table}>
            <tbody>
            {testArray.map((item) => {
                return (
                    <tr>
                        <td scope="row" className={styles.td}>
                            <input type="checkbox"/>{item.name}
                        </td>
                        <td className={styles.td}>
                            <p>Минимальное кол-во</p>
                            <input
                                className={styles.tableInput}
                                defaultValue={item.minimumCount}
                                type="text"/>
                        </td>
                        <td className={styles.td}>
                            <p>Минимальная цена</p>
                            <input
                                className={styles.tableInput}
                                defaultValue={item.minimumPrice}
                                type="text"/>
                        </td>
                        <td className={styles.td}>
                            <p>Максимальная цена</p>
                            <input
                                className={styles.tableInput}
                                defaultValue={item.maximumPrice}
                                type="text"/>
                        </td>
                        <td className={styles.td}>
                            <p>Склад</p>
                            <input
                                className={styles.tableInput}
                                defaultValue={item.currentCount}
                                type="text"/>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
};

export default Table;