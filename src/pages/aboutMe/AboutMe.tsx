import { useContext } from 'react'
import { ValueContext } from '../../App'
import { Context } from '../../Context'
import './../../styles/main.css'
import s from './aboutMe.module.css'
import img_about_me from './img_about_me.png'



export const AboutMe = () => {

    const { changeLang } = useContext<ValueContext>(Context)

    const titleChapter =  changeLang === 'russian' ? 'О себе' : 'About me'

    return (
        <section id='about-me' className={s.about_me}>
            <div className={s.box_info}>
                <h2>
                    <span className={s.title_gradient}>{titleChapter}</span>
                </h2>
                <ul>
                    <li>Степан  Демин фотограф в городе Санкт-Петербург.  Россия. </li>
                    <li>Имею отношение и плотно взаимодействую в сфере культукрых искуств на протяжении многих лет . Сочитаю в себе безусловную любовь к историй искуства и классического портрета дополняя это художнственным чутьём и бескомпромисным вниманием к деталям ,проявляя лучшие черты портретируемого.</li>
                    <li>Выполнял работы для международной ювелирной компаний , Государственного театра балета , Агентства недвижимости ,брендов одежды .</li>
                </ul>
            </div>
            <img src={img_about_me} alt="Фото" />
        </section>
    )
}