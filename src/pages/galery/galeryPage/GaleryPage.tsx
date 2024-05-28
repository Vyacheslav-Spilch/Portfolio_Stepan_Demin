import s from './galeryPage.module.css'

// import cover1 from './../images/cover1.jpg'
// import cover2 from './../images/cover2.jpg'
// import cover3 from './../images/cover3.jpg'
// import cover4 from './../images/cover4.jpg'
// import cover5 from './../images/cover5.jpg'
// import cover6 from './../images/cover6.jpg'

import { state, stateEng } from './../state'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Modal } from './modal/Modal'
import { ScrollToTop } from '../../../utils/ScrollToTop'
import { Context } from '../../../Context'
import { ValueContext } from '../../../App'

export const GaleryPage = () => {

    const { changeLang } = useContext<ValueContext>(Context)

    const navigate = useNavigate()

    //state
    const [showModal, setShowModal] = useState<boolean>(false)
    const [indexModal, setIndexModal] = useState<number>(0)


    //-----*
    const stateEng = ['Ballet  photography', 'Bisiness portrait', 'Model snippets', 'Studio photography']

    //id
    const { id } = useParams()
    const idPage = Number(id) - 1

    const openModalWindow = (indexImg: number) => {
        setShowModal(true)
        setIndexModal(indexImg)
    }

    const goMain = () => {
        navigate('/')
    } 

    const backChapter = () => {
        if(id) navigate(`/galery/${Number(id) - 1}`)
    }

    const nextChapter = () => {
        if(id) navigate(`/galery/${Number(id) + 1}`)
    }


    //-----*
    const gobBackRu = idPage !== 0 ? state[idPage - 1].chapterName : ''
    const goNextRu = idPage !== (state.length - 1) ? state[idPage + 1].chapterName : ''

    //-----*
    const goBackEng = idPage !== 0 ? stateEng[idPage - 1] : ''
    const goNextEng = idPage !== (state.length - 1) ? stateEng[idPage + 1] : ''

    console.log(goNextEng);
    
    return (
        <div className={s.box_galery_page}>
            <ScrollToTop />
            <header className={s.box_title_chapter}>
                <button className={s.btn_go_main} onClick={goMain}><i className='bx bx-left-arrow-alt'></i></button>
                    <div className={s.box_title}>
                        <button 
                            onClick={backChapter} 
                            className={s.btn_back}>
                                {changeLang === 'russian' ? gobBackRu : goBackEng}
                            </button>
                        <h2>{changeLang === 'russian' ? state[idPage].chapterName : stateEng[idPage]}</h2>
                        <button 
                            onClick={nextChapter} 
                            className={s.btn_next}>
                                {changeLang === 'russian' ? goNextRu : goNextEng}
                        </button>
                    </div>
            </header>
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