import {FC} from "react";
import styles from "./AuthPage.module.scss"
import {Link} from "react-router-dom";

interface AuthPageInterface {
    type: "Login" | "Register"
}

const AuthPage:FC<AuthPageInterface> = ({type}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__dataField}>
                <h2 className={styles.appsName}>Apps Name</h2>
                <div className={styles.wrapper__dataField__topSide}>

                    {type === "Register" &&
                        <input placeholder={"Enter your name"} className={styles.wrapper__dataField__topSide__input}
                               type="text"/>
                    }
                    <input placeholder={"Enter your email"} className={styles.wrapper__dataField__topSide__input}
                           type="email"/>
                    <input placeholder={"Enter your password"} className={styles.wrapper__dataField__topSide__input}
                           type="password"/>

                </div>
                <div className={styles.wrapper__dataField__centralSide}>
                    <Link  className={styles.wrapper__dataField__centralSide__button} to={"/"}>На главный экран</Link>

                    {type === "Login"
                        ? <Link to={"/"} className={styles.wrapper__dataField__centralSide__button} >Войти</Link>
                        : <Link to={"/"} className={styles.wrapper__dataField__centralSide__button} >Зарегистрироваться</Link>}
                </div>
                <div>
                    {type === "Login"
                        ? <Link className={styles.LinkText} to={"/registration"}>Нет аккаунта? Зарегистрируйся!</Link>
                        : <Link className={styles.LinkText} to={"/login"}>Есть аккаунт? Войди!</Link>}
                </div>
            </div>
        </div>
    )
}

export default AuthPage;