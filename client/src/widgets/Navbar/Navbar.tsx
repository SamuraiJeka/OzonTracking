import styles from "./Navbar.module.scss"

const Navbar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__rightside}>
                <p className={styles.wrapper__rightside__dataText} >Оплачен до: 06.05.2031</p>
                <p className={styles.wrapper__rightside__checkText} >Счёт</p>
            </div>

        </div>
    );
};

export default Navbar;