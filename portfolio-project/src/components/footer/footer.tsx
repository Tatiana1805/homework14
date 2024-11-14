import style from './style.module.css'
import twitter from '../../assets/icon/twitter.png'
import git from '../../assets/icon/git.png'


const Footer = () => {
    return (
        <footer className={style.container}>
            <div className={style.nav}>
                <a className={style.navA} href='#root'>Home</a>
                <a className={style.navA} href='#stak'>Навыки</a>
                <a className={style.navA} href='#projects'>Проекты</a>
                <a className={style.navA} href='#'>Контакты</a>
            </div>
            <div className={style.icon}>
                <a href='tel:+79028853038' className={style.navA}>+7(902)-885-30-38</a>
                <img src={twitter} alt='twitter' className={style.iconFooter}></img>
                <img src={git} alt='GitHub' className={style.iconFooter}></img>                
            </div>
        </footer>
    )
}

export default Footer;