import style from './style.module.css';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import SwitchTeme from '../SwitchTeme/Teme';

const Header = () => {
    return (
        <header className={style.container}>
            <Logo />
            <Nav />
            <SwitchTeme />
        </header>
    )
}

export default Header;