import { useContext } from 'react'
import { ValueContext } from '../../App'
import { Context } from '../../Context'
import s from './header.module.css'


export const Header = () => {

    //contextState
    const { changeLang, setChangeLang } = useContext<ValueContext>(Context)

    //toggleLang
    const selectRussianLang = () => {
        setChangeLang('russian')
        if(localStorage.getItem('language') !== null) {
            localStorage['language'] = 'russian'
        } else {
            localStorage.setItem('language', 'russian')
        }
    }

    const  selectEnglandLang = () => {
        setChangeLang('england')
        if(localStorage.getItem('language') !== null) {
            localStorage['language'] = 'england'
        } else {
            localStorage.setItem('language', 'england')
        }
    }

    //styles
    const RusClassName = changeLang === 'russian' ? `${s.btn_rus} ${s.active}` : s.btn_rus
    const EngClassName = changeLang === 'england' ? `${s.btn_eng} ${s.active}` : s.btn_eng

    return (
        <header className={s.header}>
            <div className={s.logo}>Logo</div>
            <nav className={s.navbar}>
                <a href="#home" className={s.active}>
                    {changeLang === 'russian' ? 'Главная': 'Main'}
                </a>
                <a href="#about-me">
                    {changeLang === 'russian' ? 'О себе': 'About me'}
                </a>
                <a href="#galery">
                    {changeLang === 'russian' ? 'Галерея': 'Galery'}
                </a>
                <a href="#contacts">
                    {changeLang === 'russian' ? 'Контакты': 'Contacts'}
                </a>
            </nav>
            <div className={s.box_btn_lang}>
                <button className={RusClassName} onClick={selectRussianLang}>Ru</button>
                <button className={EngClassName} onClick={selectEnglandLang}>En</button>
            </div>
        </header>
    )
}