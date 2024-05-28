import Navbar from "../../widgets/Navbar/Navbar.tsx";
import LeftNavbar from "../../widgets/LeftNavbar/LeftNavbar.tsx";
import styles from "./MainPage.module.scss"
import Table from "../../entity/table/table.tsx";

const MainPage = () => {

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
            minimumCount: 1235,
            minimumPrice: 2000,
            maximumPrice: 2000,
            currentCount: 125,
        },{
            name: "Check",
            minimumCount: 1235,
            minimumPrice: 2000,
            maximumPrice: 2000,
            currentCount: 125,
        },
    ]
    return (
        <div className={styles.wrapper}>
            <LeftNavbar/>
            <div className={styles.wrapper__mainField}>
                <Navbar/>
                <div className={styles.wrapper__mainField__mainData}>
                    {testArray.map((item) => {return(
                        <Table
                            name={item.name}
                            minimumCount={item.minimumCount}
                            minimumPrice={item.minimumPrice}
                            maximumPrice={item.maximumPrice}
                            currentCount={item.currentCount}
                        />
                    )})}
                </div>
            </div>
        </div>
    );
};

export default MainPage;