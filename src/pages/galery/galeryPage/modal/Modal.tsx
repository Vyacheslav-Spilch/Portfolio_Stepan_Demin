import { state, StateType } from '../../state'
import s from './modal.module.css'

type ModalType = {
    state: Array<StateType>
    idPage: number
    indexModal: number
    setIndexModal: (indexModal: number) => void
    setShowModal: (showModal: boolean) => void
}

export const Modal = ({
    state, 
    idPage, 
    indexModal, 
    setIndexModal, 
    setShowModal
    }: ModalType) => {

    const setImagesLength = state[idPage].setImages.length - 1    

    const prevImageHandler = () => {
        if (indexModal !== 0) {
            setIndexModal(indexModal - 1)
        } else {
            setIndexModal(setImagesLength)
        }
    }

    const nextImageHandler = () => {
        if (indexModal !== setImagesLength) {
            setIndexModal(indexModal + 1)
        } else {
            setIndexModal(0)
        }
    }

    const closeModalHandler = () => {
        setShowModal(false)
    }
    
    return (
        <div className={s.window}>
            <div className={s.box_modal}>
                <img src={state[idPage].setImages[indexModal]} alt="" />

                <button className={s.btn_prev} onClick={prevImageHandler}>
                    <i className='bx bxs-chevron-left'></i>
                </button>
                <button className={s.btn_next} onClick={nextImageHandler}>
                    <i className='bx bxs-chevron-right'></i>
                </button>

                <button onClick={closeModalHandler} className={s.btn_close}>
                    <i className='bx bx-x'></i>
                </button>
            </div>
        </div>
    )
}