import { useContext } from 'react'
import { ValueContext } from '../../App'
import { Context } from '../../Context'
import './../../styles/main.css'
import s from './aboutMe.module.css'
import img_about_me from './images/img_about_me.png'
import { generalInformation } from './state/state'



export const AboutMe = () => {

    const { changeLang } = useContext<ValueContext>(Context)
    const selectLanguage: boolean = changeLang === 'russian'

    const informations = selectLanguage ? generalInformation['russian'] : generalInformation['england']

    const titleChapter = selectLanguage ? 'О себе' : 'About me'

    return (
        <section id='about-me' className={s.about_me}>
            <div className={s.box_info}>
                <h2>
                    <span className={s.title_gradient}>{titleChapter}</span>
                </h2>
                <ul>
                    {informations.map((text, index) => (
                        <li key={index}>{text}</li>
                    ))}
                </ul>
            </div>
            <img src={img_about_me} alt="Фото" />
        </section>
    )
}