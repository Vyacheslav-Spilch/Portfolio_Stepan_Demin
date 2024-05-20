import { Header } from "../../components/header/Header"
import { AboutMe } from "../aboutMe/AboutMe"
import { Galery } from "../galery/Galery"
import { Home } from "../home/Home"


export const Layout = () => {
    return (
        <>
            <Header />
            <Home />
            <AboutMe />
            <Galery />
        </>

    )
}
