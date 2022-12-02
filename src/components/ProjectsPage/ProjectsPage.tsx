import React from 'react';
import styles from './ProjectsPage.module.css'
import stylesContainer from './../../common/styles/Container.module.css'
import {Skill} from '../SkillsPage/Skill/Skill';
import {Project} from './Project/Project';


export const ProjectsPage = () => {
    const projects = [
        {id: 1, title: 'Todolist', description: 'There should be a description of this project.'},
        {id: 2, title: 'Social network', description: 'There should be a description of this project.'},
    ]
    return (
        <div className={styles.projectsBlock}>
            <div className={`${stylesContainer.container} ${styles.projectsContainer}`}>
                <h2 className={styles.title}>My projects</h2>
                <div className={styles.projects}>
                    {projects.map(p =>
                        <Project key={p.id} title={p.title} description={p.description}/>)}
                </div>
            </div>
        </div>
    );
};
