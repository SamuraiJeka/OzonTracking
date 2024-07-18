import styles from "./Table.module.scss"

const Table = () => {

    const testArray = [
        {
            offerID: "#N/A",
            brand: "New balance",
            Sku: "APL214556",
            Status: "PENDING",
            state: "waiting",
            price: 4900,
            count: 123,
            cause: "smallPrice",
            promotions: 51
        },{
            offerID: "#N/A",
            brand: "New balance",
            Sku: "APL214556",
            Status: "PENDING",
            state: "waiting",
            price: 4900,
            count: 123,
            cause: "smallPrice",
            promotions: 51
        },{
            offerID: "#N/A",
            brand: "New balance",
            Sku: "APL214556",
            Status: "PENDING",
            state: "waiting",
            price: 4900,
            count: 123,
            cause: "smallPrice",
            promotions: 51
        },{
            offerID: "#N/A",
            brand: "New balance",
            Sku: "APL214556",
            Status: "PENDING",
            state: "waiting",
            price: 4900,
            count: 123,
            cause: "smallPrice",
            promotions: 51
        },
    ]


    return (
        <table className={styles.table}>
            <tbody className={styles.tbody}>
                <td scope="row" className={styles.td}>Offer ID</td>
                <td className={styles.td}>
                    <p>Бренд</p>
                </td>
                <td className={styles.td}>
                    <p>Sku</p>
                </td>
                <td className={styles.td}>
                    <p>Статус</p>
                </td>
                <td className={styles.td}>
                    <p>Состояние</p>
                </td>
                <td className={styles.td}>
                    <p>Цена</p>
                </td>
                <td className={styles.td}>
                    <p>Кол-во</p>
                </td>
                <td className={styles.td}>
                    <p>Причина</p>
                </td>
                <td className={styles.td}>
                    <p>Акции</p>
                </td>

                {testArray.map((item) => {return(
                    <>
                        <td scope="row" className={styles.td}>{item.offerID}</td>
                        <td className={styles.td}>
                            <p>{item.brand}</p>
                        </td>
                        <td className={styles.td}>
                            <p>{item.Sku}</p>
                        </td>
                        <td className={styles.td}>
                            <p>{item.Status}</p>
                        </td>
                        <td className={styles.td}>
                            <p>{item.state}</p>
                        </td>
                        <td className={styles.td}>
                            <p>{item.price}</p>
                        </td>
                        <td className={styles.td}>
                            <p>{item.count}</p>
                        </td>
                        <td className={styles.td}>
                            <p>{item.cause}</p>
                        </td>
                        <td className={styles.td}>
                            <p>{item.promotions}</p>
                        </td>

                    </>
                )
                })}

            </tbody>
        </table>
    );
};

export default Table;