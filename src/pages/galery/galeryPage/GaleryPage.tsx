import s from './galeryPage.module.css'

import { state } from './../state'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Modal } from './modal/Modal'
import { ScrollToTop } from '../../../utils/ScrollToTop'
import { Context } from '../../../Context'
import { ValueContext } from '../../../App'

export const GaleryPage = () => {

    const { changeLang } = useContext<ValueContext>(Context)
    const [ showModal, setShowModal ] = useState<boolean>(false)
    const [ indexModal, setIndexModal ] = useState<number>(0)
    const { id } = useParams()
    const navigate = useNavigate()


    const russainLenguage: boolean = changeLang === 'russian'

    const idPage = Number(id) - 1

    const openModal = (indexImg: number) => {
        setShowModal(true)
        setIndexModal(indexImg)
    }

    const goMain = () => {
        navigate('/')
    } 

    const prevChapter = () => {
        if (id) navigate(`/galery/${Number(id) - 1}`)
    }

    const nextChapter = () => {
        if (id) navigate(`/galery/${Number(id) + 1}`)
    }


    const gobBackRu = idPage !== 0 ? state[idPage - 1].chapterName : ''
    const goNextRu = idPage !== (state.length - 1) ? state[idPage + 1].chapterName : ''

    const goBackEng = idPage !== 0 ? state[idPage - 1].chapterNameEng : ''
    const goNextEng = idPage !== (state.length - 1) ? state[idPage + 1].chapterNameEng : ''

    
    return (
        <div className={s.box_galery_page}>
            <ScrollToTop />
            <header className={s.box_title_chapter}>
                <button className={s.btn_go_main} onClick={goMain}><i className='bx bx-left-arrow-alt'></i></button>
                    <div className={s.box_title}>
                        <button 
                            onClick={prevChapter} 
                            className={s.btn_back}>
                                {russainLenguage ? gobBackRu : goBackEng}
                            </button>
                        <h2>{russainLenguage ? state[idPage].chapterName : state[idPage].chapterNameEng}</h2>
                        <button 
                            onClick={nextChapter} 
                            className={s.btn_next}>
                                {russainLenguage ? goNextRu : goNextEng}
                        </button>
                    </div>
            </header>
            <div className={s.box_images}>
                {state[idPage].setImages.map((image, index) => {
                    return (
                        <div className={s.box_img} key={index}>
                            <img 
                                onClick={() => openModal(index)} 
                                src={image} 
                                alt="Изображение" 
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