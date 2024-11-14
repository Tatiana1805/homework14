import style from './style.module.css'
import my_photo from '../../img/myPhoto.jpg'

const Me = () => {
    return (
        <div className={style.container}>
            <h2>Всем привет! Меня зовут
                <h2 className={style.myName}>Татьяна Милова.</h2>
                Я frontend-разработчик.
            </h2>
            <img src={my_photo} alt="Моя фотография" className={style.img} />
        </div>
    )
}

export default Me;