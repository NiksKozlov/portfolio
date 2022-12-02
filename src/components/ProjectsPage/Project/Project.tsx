import React from 'react';
import styles from './Project.module.css'



type ProjectPropsType = {
    title: string
    description: string
}

export const Project: React.FC<ProjectPropsType> = ({title, description}) => {
    return (
        <div className={styles.project}>
            <div className={styles.icon}>
                <div className={styles.viewButton}>Смотреть</div>
            </div>
            <h4 className={styles.description}>{title}</h4>
            <span className={styles.description}>{description}</span>
        </div>
    );
};