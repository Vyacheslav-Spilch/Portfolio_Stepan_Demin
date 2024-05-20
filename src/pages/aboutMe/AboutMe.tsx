import s from './aboutMe.module.css'
import img__about_me2 from './img_about_me2.png'
import img__about_me4 from './img_about_me4.png'



export const AboutMe = () => {
    return (
        <section id='about-me' className={s.about_me}>
            <div className={s.box_info}>
                <h2>
                    <span className={s.title_gradient}>Биография</span>
                </h2>
                <ul>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde molestias, ipsam explicabo provident veritatis placeat tempora velit molestiae quam, aperiam error fuga adipisci, nobis praesentium sint totam sequi laborum iste.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro mollitia minus animi laudantium quam, quos quas ducimus optio, assumenda, dolores esse molestias hic ex et voluptatem qui. Illo, accusamus beatae.</li>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur facere eum, assumenda fugiat id odit vitae, architecto ipsa eaque expedita laboriosam cumque illum corrupti ea tenetur nobis recusandae aliquam aut!</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dignissimos quam in eos, nobis quod iste tenetur quae nam voluptates ea quibusdam fugit est velit quaerat, distinctio officia? Autem, a.</li>
                </ul>
            </div>
            <img src={img__about_me4} alt="Фото" />
        </section>
    )
}