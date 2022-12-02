import React from 'react';
import styles from './HomePage.module.css'
import stylesContainer from './../../common/styles/Container.module.css'

export const HomePage = () => {
    return (
        <div className={styles.homePageBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.greetingText}>
                    <span>Hi there</span>
                    <h1>I am Nikita Kozlov</h1>
                    <p>A Front-end Developer</p>
                </div>
                <div className={styles.photo}>

                </div>
            </div>
        </div>
    );
};
