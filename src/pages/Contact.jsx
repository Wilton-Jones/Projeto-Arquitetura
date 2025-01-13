import { useContext } from "react"
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"
import ContactForm from "../components/ContactForm/ContactForm"

// CONTEXT
import { AppContext } from '../contexts/AppContext'

function Contact() {
    const appContext = useContext(AppContext)

    return (
        <>
            <Header />
            <Banner image='contact.svg' title={appContext.languages[appContext.language].menu.contact} />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact