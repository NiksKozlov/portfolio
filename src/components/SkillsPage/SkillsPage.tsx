import React from 'react';
import styles from './SkillsPage.module.css'
import stylesContainer from './../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";


export const SkillsPage = () => {
    const skills = [
        {id: 1, title: 'React', description: 'There should be a description of this stack.'},
        {id: 2, title: 'JS', description: 'There should be a description of this stack.'},
        {id: 3, title: 'HTML/CSS', description: 'There should be a description of this stack.'}
    ]
    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>My skills</h2>
                <div className={styles.skills}>
                    {skills.map(s =>
                        <Skill key={s.id} title={s.title} description={s.description}/>)}
                </div>
            </div>
        </div>
    );
};
