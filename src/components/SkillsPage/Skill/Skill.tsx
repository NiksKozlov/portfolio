import React from 'react';
import styles from './Skill.module.css'



type SkillPropsType = {
    title: string
    description: string
}

export const Skill: React.FC<SkillPropsType> = ({title, description}) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}></div>
            <h3>{title}</h3>
            <span className={styles.description}>{description}</span>
        </div>
    );
};
