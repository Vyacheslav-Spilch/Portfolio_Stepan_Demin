import s from './galeryPage.module.css'

// import cover1 from './../images/cover1.jpg'
// import cover2 from './../images/cover2.jpg'
// import cover3 from './../images/cover3.jpg'
// import cover4 from './../images/cover4.jpg'
// import cover5 from './../images/cover5.jpg'
// import cover6 from './../images/cover6.jpg'

import { state } from './../state'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Modal } from './modal/Modal'
import { ScrollToTop } from '../../../utils/ScrollToTop'

export const GaleryPage = () => {

    //state
    const [showModal, setShowModal] = useState<boolean>(false)
    const [indexModal, setIndexModal] = useState<number>(0)
    //id
    const { id } = useParams()
    const idPage = Number(id) - 1

    const openModalWindow = (indexImg: number) => {
        setShowModal(true)
        setIndexModal(indexImg)
    }

    return (
        <div className={s.box_galery_page}>
            <ScrollToTop />
            <nav className={s.box_title_chapter}>
                <h2>{state[idPage].chapterName}</h2>
            </nav>
            <div className={s.box_images}>
                {state[idPage].setImages.map((img, index) => {
                    return (
                        <div className={s.box_img} key={index}>
                            <img 
                                onClick={() => openModalWindow(index)} 
                                src={img} 
                                alt="" 
                            />
                        </div>
                    )
                })}
            </div>
            {
                showModal && <Modal 
                                idPage={idPage}
                                state={state} 
                                indexModal={indexModal} 
                                setIndexModal={setIndexModal}
                                setShowModal={setShowModal}
                            />}
        </div>
    )
}