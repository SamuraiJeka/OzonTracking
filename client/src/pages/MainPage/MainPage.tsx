import Navbar from "../../widgets/Navbar/Navbar.tsx";
import LeftNavbar from "../../widgets/LeftNavbar/LeftNavbar.tsx";
import styles from "./MainPage.module.scss"
import Table from "../../entity/table/table.tsx";

const MainPage = () => {


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

export default MainPage;