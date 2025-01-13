// 1ª MANEIRA DE APLICAR UMA CONDICAO DE ESTADO ENTRE TRUE E FALSE

import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import './Header.css'

// ASSETS
import Logo from '../../assets/dnc-logo.svg'

// COMPONENTS
import Button from '../Button/Button'

// CONTEXT
import { AppContext } from '../../contexts/AppContext'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)

    const appContext = useContext(AppContext)

    return (
        <header>
            <div className='container'>
                <div className='al-center d-flex jc-space-between'>
                    <Link to='/'><img src={Logo} alt='logo-dnc' /></Link>
                    <div className='mobile-menu'>
                        <Button buttonStyle='secondary' onClick={toggleMenu} >Menu</Button>
                    </div>
                    <nav className={`${isOpen ? 'open' : ''}`}>
                        <Button className='mobile-menu close-btn' onClick={toggleMenu}>X</Button>
                        <ul className='d-flex'>
                            <li><Link to='/'>{appContext.languages[appContext.language].menu.home}</Link></li>
                            <li><Link to='/about'>{appContext.languages[appContext.language].menu.about}</Link></li>
                            <li><Link to='/projects'>{appContext.languages[appContext.language].menu.projects}</Link></li>
                            <li><Link to='/contact'>{appContext.languages[appContext.language].menu.contact}</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header >
    )
}

export default Header



// 2ª MANEIRA DE APLICAR UMA CONDICAO DE ESTADO ENTRE TRUE E FALSE

// import { Link } from 'react-router-dom'
// import { useState } from 'react'
// import './Header.css'

// // ASSETS
// import Logo from '../../assets/dnc-logo.svg'

// //COMPONENTS
// import Button from '../Button/Button'

// function Header() {
//     const [isOpen, setIsOpen] = useState(false)

//     const toggleMenu = () => {
//         setIsOpen((previState) => { if (previState === true) { return false } else { return true } })
//     }

//     return (
//         <header>
//             <div className='container'>
//                 <div className='al-center d-flex jc-space-between'>
//                     <Link to='/'><img src={Logo} alt='logo-dnc' /></Link>
//                     <div className='mobile-menu'>
//                         <Button buttonStyle='secondary' onClick={toggleMenu} >Menu</Button>
//                     </div>
//                     <nav className={`${isOpen ? 'open' : ''}`}>
//                         < Button className = 'mobile-menu close-btn' onClick={toggleMenu} > X</Button >
//                         <ul className='d-flex'>
//                             <li><Link to='/'>Home</Link></li>
//                             <li><Link to='/about'>About us</Link></li>
//                             <li><Link to='/projects'>Projects</Link></li>
//                             <li><Link to='/contact'>Contact</Link></li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>
//         </header >
//     )
// }

// export default Header



// 3ª MANEIRA DE APLICAR UMA CONDICAO DE ESTADO ENTRE TRUE E FALSE

// import { Link } from 'react-router-dom'
// import { useState } from 'react'
// import './Header.css'

// // ASSETS
// import Logo from '../../assets/dnc-logo.svg'

// //COMPONENTS
// import Button from '../Button/Button'

// function Header() {
//     const [isOpen, setIsOpen] = useState(false)

//     const toggleMenu = () => {
//         setIsOpen((previState) => previState === true ? false : true)
//     }

//     return (
//         <header>
//             <div className='container'>
//                 <div className='al-center d-flex jc-space-between'>
//                     <Link to='/'><img src={Logo} alt='logo-dnc' /></Link>
//                     <div className='mobile-menu'>
//                         <Button buttonStyle='secondary' onClick={toggleMenu} >Menu</Button>
//                     </div>
//                     <nav className={`${isOpen ? 'open' : ''}`}>
//                         < Button className = 'mobile-menu close-btn' onClick={toggleMenu} > X</Button >
//                         <ul className='d-flex'>
//                             <li><Link to='/'>Home</Link></li>
//                             <li><Link to='/about'>About us</Link></li>
//                             <li><Link to='/projects'>Projects</Link></li>
//                             <li><Link to='/contact'>Contact</Link></li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>
//         </header >
//     )
// }

// export default Header