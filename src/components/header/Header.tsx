import { useContext, useState } from 'react'
import { ValueContext } from '../../App'
import { Context } from '../../Context'
import s from './header.module.css'


type SectionPageType = 'main' | 'about_me' | 'galery' | 'contacts'

export const Header = () => {

    const { changeLang, setChangeLang } = useContext<ValueContext>(Context)

    const [sectionPage, setSectionPage] = useState<SectionPageType>('main')


    const toggleSectionPage = (section: SectionPageType): void => {
        setSectionPage(section)
    }

    const selectRussianLang = () => {
        setChangeLang('russian')
        if(localStorage.getItem('language') !== null) {
            localStorage['language'] = 'russian'
        } else {
            localStorage.setItem('language', 'russian')
        }
    }

    const selectEnglandLang = () => {
        setChangeLang('england')
        if(localStorage.getItem('language') !== null) {
            localStorage['language'] = 'england'
        } else {
            localStorage.setItem('language', 'england')
        }
    }


    const russainLanguage: boolean = changeLang === 'russian'
    const RusClassName = changeLang === 'russian' ? `${s.btn_rus} ${s.active}` : s.btn_rus
    const EngClassName = changeLang === 'england' ? `${s.btn_eng} ${s.active}` : s.btn_eng

    return (
        <header className={s.header}>
            <div className={s.logo}>Logo</div>
            <nav className={s.navbar}>
                <a href="#home" 
                    className={sectionPage === 'main' ? s.active : ''} 
                    onClick={() => toggleSectionPage('main')}
                >
                    <span className={s.title_gradient}>{russainLanguage ? 'Главная' : 'Main'}</span>
                </a>
                <a href="#about-me" 
                    className={sectionPage === 'about_me' ? s.active : ''} 
                    onClick={() => toggleSectionPage('about_me')}
                >
                    {russainLanguage ? 'О себе': 'About me'}
                </a>
                <a href="#galery" 
                    className={sectionPage === 'galery' ? s.active : ''} 
                    onClick={() => toggleSectionPage('galery')}
                >
                    {russainLanguage ? 'Галерея': 'Galery'}
                </a>
                <a href="#contacts" 
                    className={sectionPage === 'contacts' ? s.active : ''} 
                    onClick={() => toggleSectionPage('contacts')}
                > 
                    {russainLanguage ? 'Контакты' : 'Contacts'}
                </a>
            </nav>
            <div className={s.box_btn_lang}>
                <button className={RusClassName} onClick={selectRussianLang}>Ru</button>
                <button className={EngClassName} onClick={selectEnglandLang}>En</button>
            </div>
        </header>
    )
}