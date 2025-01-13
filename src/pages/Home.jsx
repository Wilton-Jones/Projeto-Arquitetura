import Header from "../components/Header/Header"
import Hero from '../components/Hero/Hero'
import Footer from "../components/Footer/Footer"
import ProjectsList from "../components/ProjectsList/ProjectsList"

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <ProjectsList image='about.svg' />
            <Footer />
        </>
    )
}

export default Home
