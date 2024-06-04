import styles from "./ProfilePage.module.scss"
import LeftNavbar from "../../widgets/LeftNavbar/LeftNavbar.tsx";
import Navbar from "../../widgets/Navbar/Navbar.tsx";
import testAvatar from "../../shared/ico/logo.png"

const ProfilePage = () => {
    return (
        <div className={styles.wrapper}>
            <LeftNavbar/>
            <div className={styles.wrapper__mainField}>
                <Navbar/>
                <div className={styles.wrapper__mainField__mainData}>
                    <div className={styles.wrapper__mainField__mainData__profileData}>
                        <div className={styles.wrapper__mainField__mainData__profileData__leftSide}>
                            <div className={styles.wrapper__mainField__mainData__profileData__leftSide__topside}>
                                <img className={styles.wrapper__mainField__mainData__profileData__leftSide__avatar}
                                     src={testAvatar} alt=""/>
                                <p className={styles.wrapper__mainField__mainData__profileData__leftSide__name}>Пустовалов
                                    Александр</p>
                            </div>
                        </div>
                        <div className={styles.wrapper__mainField__mainData__profileData__rightSide}>
                            <p className={styles.wrapper__mainField__mainData__profileData__rightSide__phone}>+7(985)691-01-45</p>
                            <p className={styles.wrapper__mainField__mainData__profileData__rightSide__mail}>pustovalov.al.an@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;