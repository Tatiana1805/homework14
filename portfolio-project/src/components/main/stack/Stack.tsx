import style from './style.module.css'
import techStack from '../../../data/techStack.json'
import { Technology } from '../../../types';

const Stack = () => {
    return (
        <section className={style.container} id='stak'>
            <h2 className={style.technology}>Мои навыки</h2>
            <p className={style.p}>Технологии, с которыми я работала в последнее время</p>
            <div className={style.arrImg}>
                {techStack.technology.map((tech: Technology) => (
                    <div key={tech.id} className={style.icon}>
                        <img src={`${tech.icon}`}/>
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stack;