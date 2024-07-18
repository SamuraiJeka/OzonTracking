import styles from "./LeftNavbar.module.scss"
import logo from "../../shared/ico/logo.png"
import { SlOptions } from "react-icons/sl";
import { FaUserAlt } from "react-icons/fa";
import { CiTextAlignJustify } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import {Link} from "react-router-dom";

const LeftNavbar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__logoPlace}>
                <div className={styles.wrapper__logoPlace__text}>
                    <img className={styles.wrapper__logoPlace__text__logo} src={logo} alt=""/>
                    <p className={styles.wrapper__logoPlace__text__appName}>Apps Name</p>
                </div>
                <SlOptions/>
            </div>
            <div className={styles.wrapper__pageChoice}>
                <Link to={"/profile"} className={styles.wrapper__pagesChoice__pagename}><FaUserAlt/> Профиль</Link>
                <Link to={"/"} className={styles.wrapper__pagesChoice__pagename}><CiTextAlignJustify/>Контроль прибытия</Link>
                <Link to={"/goods"} className={styles.wrapper__pagesChoice__pagename}><CiTextAlignJustify/>Товары</Link>
                <Link to={"#"} className={styles.wrapper__pagesChoice__pagename}><CiLogout/>Выйти</Link>
            </div>
        </div>
    );
};

export default LeftNavbar;