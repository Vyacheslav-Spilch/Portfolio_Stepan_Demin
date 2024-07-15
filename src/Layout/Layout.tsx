import { Header } from "../components/header/Header"
import { ScrollToTop } from "../utils/ScrollToTop"
import { AboutMe } from "../pages/aboutMe/AboutMe"
import { Contacts } from "../pages/contacts/Contacts"
import { Galery } from "../pages/galery/Galery"
import { Home } from "../pages/home/Home"


const Layout = () => {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Home />
            <AboutMe />
            <Galery />
            <Contacts />
        </>

    )
}

export default Layout