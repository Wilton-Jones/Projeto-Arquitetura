import { useContext } from 'react'
import { Link } from 'react-router-dom'

// ASSETS 
import Logo from '../../assets/dnc-logo.svg'
import BrazilIcon from '../../assets/brazil-icon.svg'
import UsaIcon from '../../assets/usa-icon.svg'
import LinkedinIcon from '../../assets/linkedin-icon.svg'
import FacebookIcon from '../../assets/facebook-icon.svg'
import IntagramIcon from '../../assets/instagram-icon.svg'
import TwitterIcon from '../../assets/twitter-icon.svg'
import './Footer.css'

// COMPONENTS
import Button from '../Button/Button'

// CONTEXT
import { AppContext } from '../../contexts/AppContext'

function Footer() {
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }

    return (
        <footer>
            <div className='container'>
                <div className='d-flex jc-space-between mobile-fd-column'>
                    <div className='footer-logo-col'>
                        <img src={Logo} alt='logo-dnc' className='footer-logo' />
                        <p className='grey-1-color'>{appContext.languages[appContext.language].general.footerLogoText}</p>
                        <div className='d-felx social-links'>
                            <a href='https://google.com' target='_blank'>
                                <img src={FacebookIcon} alt='facebook' />
                            </a>
                            <a href='https://google.com' target='_blank'>
                                <img src={TwitterIcon} alt='facebook' />
                            </a>
                            <a href='https://google.com' target='_blank'>
                                <img src={LinkedinIcon} alt='facebook' />
                            </a>
                            <a href='https://google.com' target='_blank'>
                                <img src={IntagramIcon} alt='facebook' />
                            </a>
                        </div>
                    </div>
                    <div className='d-flex mobile-fd-column'>
                        <div className='footer-col'>
                            <h3>Pages</h3>
                            <ul>
                                <li><Link to='/'>{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link to='/about'>{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link to='/projects'>{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link to='/contact'>{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h3>Contact</h3>
                            <p className='grey-1-color'>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                            <p className='grey-1-color'>suporte@escoladnc.com.br</p>
                            <p className='grey-1-color'>(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex jc-space-between footer-copy'>
                    <p className='grey-1-color'>Copyright © DNC - 2024</p>
                    <div className='d-flex langs-area'>
                        <Button buttonStyle='unstyled' onClick={() => changeLanguage('br')}>
                            <img src={BrazilIcon} width='29px' />
                        </Button>
                        <Button buttonStyle='unstyled' onClick={() => changeLanguage('en')}>
                            <img src={UsaIcon} width='29px' />
                        </Button>
                    </div>
                </div>
            </div>

        </footer >
    )
}

export default Footer