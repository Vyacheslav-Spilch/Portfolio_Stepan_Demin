import { useContext } from 'react'
import { ValueContext } from '../../App'
import { Context } from '../../Context'
import s from './contacts.module.css'
import { Messangers } from './messangers/Messangers'

export const Contacts = () => {

    const { changeLang } = useContext<ValueContext>(Context)

    const selectLang: boolean = changeLang === 'russian'


    const titleChapter = selectLang ? 'Контакты' : 'Contacts'
    const socialChapter = selectLang ? 'Социальные сети' : 'Social networks'
    const phone = selectLang ? 'Телефон' : 'Phone'
    const mail = selectLang ? 'Почта' : 'Mail'

    const fullYear = new Date().getFullYear()

    return (
        <section id='contacts' className={s.box_contacts}>
            <h2>
                <span className={s.title_gradient}>{titleChapter}</span>
            </h2>
            <div className={s.box_content}>
                <nav className={s.box_social}>
                    <h3><span className={s.title_gradient}>{socialChapter}</span></h3>
                    <Messangers />
                </nav>
                <nav className={s.box_phone_mail}>
                    <div className={s.box_phone}>
                        <h3><span className={s.title_gradient}>{phone}</span></h3>
                        <h4>+79991150477</h4>
                    </div>
                    <div className={s.box_mail}>
                        <h3><span className={s.title_gradient}>{mail}</span></h3>
                        <h4>Seeeepa30@gmail.com</h4>
                    </div>
                </nav>
            </div>
            <footer className={s.box_footer}>
                <ul>
                    <li>Stepan Demin / Photographer</li>
                    <li>{fullYear}</li>
                </ul>
            </footer>
        </section>
    )
}