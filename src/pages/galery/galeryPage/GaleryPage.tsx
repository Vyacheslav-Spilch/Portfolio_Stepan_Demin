import s from './galeryPage.module.css'

import { ChapterType, state } from '../state/state'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Modal } from './modal/Modal'
import { ScrollToTop } from '../../../utils/ScrollToTop'
import { Context } from '../../../Context'
import { ValueContext } from '../../../App'

const GaleryPage = () => {

    const { changeLang } = useContext<ValueContext>(Context)
    const [ showModal, setShowModal ] = useState<boolean>(false)
    const [ indexModal, setIndexModal ] = useState<number>(0)
    const { id } = useParams()
    const navigate = useNavigate()


    const russainLanguage: boolean = changeLang === 'russian'
    const idPage = Number(id) - 1

    const toBackMobile = idPage !== 0
    const toGoMobile = idPage !== (state.length - 1)

    const openModal = (indexImg: number) => {
        setShowModal(true)
        setIndexModal(indexImg)
    }

    const goMain = () => {
        navigate('/portfolio-photographer/#gallery')
    } 


    const prevChapter = () => {
        if (id) navigate(`/galery/${Number(id) - 1}`)
    }

    const nextChapter = () => {
        if (id) navigate(`/galery/${Number(id) + 1}`)
    }

    const handlerToPrev = (chapterName: ChapterType): string | null => {
        return idPage !== 0 ? state[idPage - 1][chapterName] : null
    }


    const handlerToNext = (chapterName: ChapterType) => {
        return idPage !== (state.length - 1) ? state[idPage + 1][chapterName] : null
    }


    
    return (
        <div className={s.box_galery_page}>
            <ScrollToTop />
            <header className={s.box_title_chapter}>
                <button className={s.btn_go_main} onClick={goMain}><i className='bx bx-home-alt-2'></i></button>
                    <div className={s.box_title}>
                        <button 
                            onClick={prevChapter} 
                            className={s.btn_back}>
                            { russainLanguage ? handlerToPrev('chapterName') : handlerToPrev('chapterNameEng') }
                        </button>
                            {toBackMobile && <button onClick={prevChapter} className={s.mobile_left_switch}><i className='bx bxs-left-arrow-alt'></i></button>}
                                <h2>{russainLanguage ? state[idPage].chapterName : state[idPage].chapterNameEng}</h2>
                            {toGoMobile && <button onClick={nextChapter} className={s.mobile_right_switch}><i className='bx bxs-right-arrow-alt'></i></button>}
                        <button 
                            onClick={nextChapter} 
                            className={s.btn_next}>
                                { russainLanguage ? handlerToNext('chapterName') : handlerToNext('chapterNameEng') }
                        </button>
                    </div>
            </header>
            <div className={s.box_images}>
                {state[idPage].setImages.map((image, index) => {
                    return (
                        <div className={s.box_img} key={index}>
                            <img 
                                key={index}
                                onClick={() => openModal(index)} 
                                src={image} 
                                alt="Изображение" 
                            />
                        </div>
                    )
                })}
            </div>
            {showModal && <Modal 
                            idPage={idPage}
                            state={state} 
                            indexModal={indexModal} 
                            setIndexModal={setIndexModal}
                            setShowModal={setShowModal}
            />}
        </div>
    )
}

export default GaleryPage