import React from 'react';
import stylesContainer from './../../common/styles/Container.module.css'
import styles from './Contacts.module.css'


export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
                <h2 style={{backgroundColor: 'grey'}}>Contacts</h2>
                <form className={styles.form}>
                    <input type="text" className={styles.input}/>
                    <input type="text" className={styles.input}/>
                    <textarea style={{height: '170px'}}></textarea>
                </form>
                <button className={styles.submitButton}>Submit</button>
            </div>
        </div>
    );
};