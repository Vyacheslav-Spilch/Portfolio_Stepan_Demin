import s from './messangers.module.css'

export const Messangers = () => {
    return (
        <nav className={s.box_messangers}>
            <a className={s.instagram} href="" target='_blank'>
                <i className='bx bxl-instagram'></i>
            </a>
            <a className={s.telegram} href="#" target='_blank'>
                <i className='bx bxl-telegram' ></i>
            </a>
            <a className={s.vkontakte} href="https://vk.com/eeedseee?from=search" target='_blank'>
                <i className='bx bxl-vk'></i>
            </a>
            <a className={s.whatsapp} href="#" target='_blank'>
                <i className='bx bxl-whatsapp'></i>
            </a>
        </nav>
    )
}