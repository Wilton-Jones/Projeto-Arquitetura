import { useContext } from "react"
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import ProjectsList from "../components/ProjectsList/ProjectsList"
import Footer from "../components/Footer/Footer"

// CONTEXT
import { AppContext } from '../contexts/AppContext'

function Projects() {
    const appContext = useContext(AppContext)

    return (
        <>
            <Header />
            <Banner image='projects.svg' title={appContext.languages[appContext.language].menu.projects} />
            <ProjectsList image='about.svg' />
            <Footer />
        </>
    )
}

export default Projects