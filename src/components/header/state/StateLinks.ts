import { SectionPageType } from "../Header"

type LinksType = Array<LinkType>

type LinkType = {
    link: SectionPageType
    nameRu: string
    nameEng: string
}


export const stateLinks: LinksType = [
    {
        link: 'home', nameRu: 'Главная', nameEng: 'Home'
    },
    {
        link: 'about_me', nameRu: 'О себе', nameEng: 'About me'
    },
    {
        link: 'galery', nameRu: 'Галерея', nameEng: 'Galery'
    },
    {
        link: 'contacts', nameRu: 'Контакты', nameEng: 'Contacts'
    },
]