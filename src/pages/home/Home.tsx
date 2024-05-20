import { Messangers } from '../../components/messangers/Messangers'
import s from './home.module.css'


export const Home = () => {
    return (
        <section id='home' className={s.home}>
            <div className={s.preview}>
                <h1>Степан Дёмин</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit fugit ullam tenetur quidem modi velit tempore eligendi laboriosam, vitae voluptas sapiente totam non veritatis at mollitia debitis nihil autem praesentium.</p>
            </div>
            <Messangers />
        </section>
    )
}