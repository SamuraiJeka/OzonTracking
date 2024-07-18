import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.scss';

const ErrorPage: React.FC = () => {
    return (
        <div className={styles.errorWrapper}>
            <div className={styles.errorWrapper__content}>
                <div className={styles.errorWrapper__content__header}>404</div>
                <div className={styles.errorWrapper__content__message}>Страница не найдена</div>
                <Link to="/" className={styles.errorWrapper__content__link}>Вернуться на главную</Link>
            </div>
        </div>
    );
};

export default ErrorPage;
