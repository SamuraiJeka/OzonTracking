import LeftNavbar from "../../widgets/LeftNavbar/LeftNavbar.tsx";
import Table from "../../entity/GoodsTable/Table.tsx";
import styles from "../MainPage/MainPage.module.scss";
import Navbar from "../../widgets/Navbar/Navbar.tsx";

const GoodsPage = () => {
    return (
        <div className={styles.wrapper}>
            <LeftNavbar/>
            <div className={styles.wrapper__mainField}>
                <Navbar/>
                <div className={styles.wrapper__mainField__mainData}>
                    <Table/>
                </div>
            </div>
        </div>
    );
};

export default GoodsPage;