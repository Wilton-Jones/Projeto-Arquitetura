import { useContext } from "react"
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import AboutText from "../components/AboutText/AboutText"
import Footer from "../components/Footer/Footer"

// CONTEXT
import { AppContext } from '../contexts/AppContext'

function About() {
    const appContext = useContext(AppContext)

    return (
        <>
            <Header />
            <Banner image='about.svg' title={appContext.languages[appContext.language].menu.about} />
            <AboutText />
            <Footer />
        </>
    )
}

export default About