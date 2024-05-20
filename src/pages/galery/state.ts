import ballet1 from './images/balet/ballet1.jpg'
import ballet2 from './images/balet/ballet2.jpg'
import ballet3 from './images/balet/ballet3.jpg'
import ballet4 from './images/balet/ballet4.jpg'
import ballet5 from './images/balet/ballet5.jpg'
import ballet6 from './images/balet/ballet6.jpg'
import ballet7 from './images/balet/ballet7.jpg'
import ballet8 from './images/balet/ballet8.jpg'
import ballet9 from './images/balet/ballet9.jpg'



import portrait1 from './images/portraits/portrait1.jpg'
import portrait2 from './images/portraits/portrait2.jpg'
import portrait3 from './images/portraits/portrait3.jpg'
import portrait4 from './images/portraits/portrait4.jpg'
import portrait5 from './images/portraits/portrait5.jpg'



import model1 from './images/model/model1.jpg'
import model2 from './images/model/model2.jpg'
import model3 from './images/model/model3.jpg'
import model4 from './images/model/model4.jpg'
import model5 from './images/model/model5.jpg'
import model6 from './images/model/model6.jpg'



import studio1 from './images/studio/studio1.jpg'
import studio2 from './images/studio/studio2.jpg'
import studio3 from './images/studio/studio3.jpg'
import studio4 from './images/studio/studio4.jpg'



export type StateType = {
    id: number
    chapterName: string
    image: string
    setImages: Array<string>
}

export const state: Array<StateType> = [
    {
        id: 1,
        chapterName: 'Балетные фотографии',
        image: ballet6,
        setImages: [ballet1, ballet2, ballet3, ballet4, ballet5, ballet6, ballet7, ballet8, ballet9]
    },
    {
        id: 2,
        chapterName: 'Деловые портреты',
        image: portrait1,
        setImages: [portrait1, portrait2, portrait3, portrait4, portrait5]
    },
    {
        id: 3,
        chapterName: 'Модельные сниппеты',
        image: model1,
        setImages: [model1, model2, model3, model4, model5, model6]
    },
    {
        id: 4,
        chapterName: 'Студийная фотография',
        image: studio1,
        setImages: [studio1, studio2, studio3, studio4]
    }
]