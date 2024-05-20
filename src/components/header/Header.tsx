import { useState } from 'react'
import s from './header.module.css'

type LanguagesType = 'russian' | 'england'

export const Header = () => {


    const [language, setLanguage] = useState<LanguagesType>('russian')


    function toggleLangRus () {
        setLanguage('russian')
    }

    function toggleLangEng () {
        setLanguage('england')
    }

    return (
        <header className={s.header}>
            <div className={s.logo}>Logo</div>
            <nav className={s.navbar}>
                <a href="#home" className={s.active}>Главная</a>
                <a href="#about-me">О себе </a>
                <a href="#galery">Галерея</a>
                <a href="">Отзывы</a>
            </nav>
            
        </header>
    )
}