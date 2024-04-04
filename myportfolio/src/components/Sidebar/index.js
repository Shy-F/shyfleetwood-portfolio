import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { 
    faHome, 
    faUser, 
    faEnvelope, 
    faSuitcase, 
    faBars, 
    faClose } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'  onClick={() => setShowNav(false)}>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="shybreasia" />
        </Link>
        <nav className={showNav ? "mobile-view" : ""}>
            <NavLink exact="true" 
            activeclassname="active" to="/" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color="#785a49" />
            </NavLink>
            <NavLink 
           activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} color="#785a49" />
            </NavLink>
            <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faSuitcase} color="#785a49" />
        </NavLink>
            <NavLink  
            activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color="#785a49" />
            </NavLink>
            <FontAwesomeIcon
            onClick={() => setShowNav(false)}
            icon={faClose}
            color='#6a3922'
            size='3x'
            className='close-icon'
            />
        </nav>
        <ul>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/shybreasia-fleetwood/" 
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#785a49"
                    className='anchor-icon' />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Shy-F" 
                >
                    <FontAwesomeIcon icon={faGithub} color="#785a49"
                    className='anchor-icon' />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#6a3922"
        size='3x'
        className='hamburger-icon'
        />
    </div>
)
}

export default Sidebar