import style from './style.module.css'
import arrProjects from '../../../data/project.json'
import { Projects } from '../../../types';
import { useContext } from 'react';
import { ThemeContext } from '../../../App';

const MyProjects = () => {
    const themeContext = useContext(ThemeContext);

    return (
        <section className={style.container} id='projects'>
            <h2 className={style.arr}>Мои проекты</h2>
            <p>Проекты, которые я сделала</p>
            <div className={style.projects}>
                {arrProjects.projects.map((project: Projects) => (
                    <div key={project.id}
                    // Добавляем условие, если контекст темы со значем dark то добавляем класс темный темы иначе не добавляем ничего
                    className={`${style.project} ${themeContext?.theme === 'light' ? style.project_dark : ''}`}>                        
                        <img src={`${project.icon}`} className={style.imgProject}/>
                        <h3>{project.name}</h3>
                        <p className={style.p}>{project.info}</p>
                        <a className={style.code} href={project.code}>Ссылка на работу</a>
                    </div>
                ))}
            </div>
        </section>
    )
}


export default MyProjects;