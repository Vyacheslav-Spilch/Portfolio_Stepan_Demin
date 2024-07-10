import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ValueContext } from '../../App'
import { Context } from '../../Context'
import s from './galery.module.css'

import { state} from './state/state'



export const Galery = () => {

    const { changeLang } = useContext<ValueContext>(Context)

    const russianLanguage: boolean = changeLang === 'russian'

    const titleChapter = russianLanguage ? 'Галерея' : 'Gallery'

    return (
        <section id="gallery" className={s.box_galery}>
            <h2>
                <span className={s.title_gradient}>{titleChapter}</span>
            </h2>
            <div className={s.box_images}>
                {state.map(chapter => {
                    return (
                        <div key={chapter.id} className={russianLanguage ? s.wrapper_img_chapter : s.wrapper_img_chapter_eng}>
                            <NavLink to={`/galery/${chapter.id}`}>
                                <img src={chapter.image} alt="" />
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}