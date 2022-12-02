import React from 'react';
import stylesContainer from './../../common/styles/Container.module.css'
import styles from './Footer.module.css'


export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${stylesContainer.container} ${styles.footerContainer}`}>
                <h2 style={{backgroundColor: 'grey'}}>Nikita Kozlov</h2>
                <div className={styles.smth}>
                    <div className={styles.smth2}></div>
                    <div className={styles.smth2}></div>
                    <div className={styles.smth2}></div>
                    <div className={styles.smth2}></div>
                </div>
                <footer>©2022 All rights reserved</footer>
            </div>
        </div>
    );
};