import style from './style.module.css';

const Nav = () => {
    return(
    <nav className = {style.container}>
        <a href="#">О себе</a>
        <a href="#">Мои работы</a>
        <a href="#">Контакты</a>
    </nav>

    )
}

export default Nav;