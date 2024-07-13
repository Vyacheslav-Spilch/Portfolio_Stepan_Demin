import { useState } from 'react'
import sMob from './headerMobile.module.css'
import MenuIcon from '@material-ui/icons/Menu';
import ClearSharpIcon from '@material-ui/icons/ClearSharp';
import { LinksType, stateLinks } from '../state/StateLinks';
import { SectionPageType } from '../Header';
import { SelectLang } from '../../../App';

type MobuleType = {
    sectionPage: SectionPageType
    russainLanguage: boolean
    toggleSectionPage: (section: SectionPageType) => void
}

export const HeaderMobule = ({sectionPage,toggleSectionPage, russainLanguage}: MobuleType) => {
    const [ openMenu, setOpenMenu ] = useState<boolean>(false)

    const onClickOpenMenu = (switcher: boolean) => {
        if(switcher) {
            setOpenMenu(true)
        } else {
            setOpenMenu(false)
        }
    }


    const buttonPanel = openMenu 
    ? <ClearSharpIcon 
        className={sMob.close_menu} 
        onClick={() => onClickOpenMenu(false)}

        /> 
    : <MenuIcon 
        className={sMob.burger_icon} 
        onClick={() => onClickOpenMenu(true)}
        />

        const panelLinks = stateLinks.map((link, index) => {
            return <a key={index} href={`#${link.link}`} 
                        className={sectionPage === link.link ? sMob.active : ''} 
                        onClick={() => toggleSectionPage(link.link)}>
                        <span className={sMob.title_gradient}>{russainLanguage ? link.nameRu : link.nameEng}</span>
                    </a>
            })

    return (
        <nav className={sMob.navbar_mobile}>
            {buttonPanel}
            {openMenu && <div className={sMob.panel_navigate}>{panelLinks}</div>}
        </nav>
    )
}