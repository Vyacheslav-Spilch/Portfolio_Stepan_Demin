import { useContext, useState } from 'react'
import { ValueContext } from '../../App'
import { Context } from '../../Context'
import s from './header.module.css'
import { SelectLang } from './../../App'
import { stateLinks } from './state/StateLinks'


export type SectionPageType = 'home' | 'about_me' | 'gallery' | 'contacts'

export const Header = () => {

    const { changeLang, setChangeLang } = useContext<ValueContext>(Context)
    const [ sectionPage, setSectionPage ] = useState<SectionPageType>('home')


    const toggleSectionPage = (section: SectionPageType) => {
        setSectionPage(section)
    }

    const toSwitchLanguage = (lang: SelectLang) => {
        setChangeLang(lang)
        if(localStorage.getItem('language') !== null) {
            localStorage['language'] = lang
        } else {
            localStorage.setItem('language', lang)
        }
    }


    const russainLanguage: boolean = changeLang === 'russian'
    const RusClassName = russainLanguage ? `${s.active}` : s.btn_rus
    const EngClassName = !russainLanguage ? `${s.active}` : s.btn_eng


    const links = stateLinks.map((link, index) => {
        return <a key={index} href={`#${link.link}`} 
                    className={sectionPage === link.link ? s.active : ''} 
                    onClick={() => toggleSectionPage(link.link)}>
                    <span className={s.title_gradient}>{russainLanguage ? link.nameRu : link.nameEng}</span>
                </a>
        })
    

    return (
        <header className={s.header}>
            <div className={s.logo}>Logo</div>
                <nav className={s.navbar}>
                    {links}
                </nav>
                <div className={s.box_btn_lang}>
                    <button className={RusClassName} onClick={() => toSwitchLanguage('russian')}>Ru</button>
                    <button className={EngClassName} onClick={() => toSwitchLanguage('england')}>En</button>
                </div>
        </header>
    )
}