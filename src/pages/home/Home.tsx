import { useContext } from 'react'
import { ValueContext } from '../../App'
import { Context } from '../../Context'
import s from './home.module.css'


export const Home = () => {

    const { changeLang } = useContext<ValueContext>(Context)
    const titleName = changeLang === 'russian' ? 'Степан Дёмин' : 'Stepan Demin'

    return (
        <section id='home' className={s.home}>
            <div className={s.preview}>
                <h1>{titleName}</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit fugit ullam tenetur quidem modi velit tempore eligendi laboriosam, vitae voluptas sapiente totam non veritatis at mollitia debitis nihil autem praesentium.</p>
            </div>
        </section>
    )
}