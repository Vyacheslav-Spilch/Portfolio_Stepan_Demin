import { NavLink } from 'react-router-dom'
import s from './galery.module.css'

// import { NavLink } from 'react-router-dom'

import { state } from './state'




export const Galery = () => {

    return (
        <section id="galery" className={s.box_galery}>
            <h2>
                <span className={s.title_gradient}>Галерея</span>
            </h2>
            <div className={s.box_images}>
                {state.map(chapter => {
                    return (
                        <div key={chapter.id} className={s.wrapper_img_chapter}>
                            <NavLink to={`/galery/${chapter.id}`}>
                                <img src={chapter.image} alt="" />
                                {/* <span className={s.title_chapter}>{chapter.chapterName}</span> */}
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}