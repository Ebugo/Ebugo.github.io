import React, { useState, useEffect } from 'react';
import './MobileMenu.css';
import {
    useAppContext,
    useDispatchAppContext,
  } from '../../../react-wrapper/Context/AppContext/AppContext';
import SocialMediaNav from '../SocialMediaNav/SocialMediaNav';

const MobileMenu = ({onSelectMobileLinkSwitch}) => {

    const appContext = useAppContext();
    const dispatchAppContext = useDispatchAppContext();

    const [mobileLink, setMobileLink] = useState("Home")

    const toggleMenu = () => {
        document.querySelector('#burger').classList.toggle('is-open');
        document.querySelector('#main-nav').classList.toggle('is-open');
    };


    const handleMobileLinkChange = (e) => {
        const link = e.target.dataset.id

        Array.from(document.querySelectorAll('.main-nav .mobile-links')).map(element => {
            element.style.color = 'white';
          });
          e.target.style.color = '#81AFC5';
        toggleMenu()
        onSelectMobileLinkSwitch(link)
    }

    return (
        <div className="mobilemenu-sty-cover">
            <button onClick={toggleMenu} id="burger" className="open-main-nav">
                <span className="burger"></span>
                <span className="burger-text">Menu</span>
            </button>
            <nav className="main-nav" id="main-nav">
                <ul>
                    <li onClick={handleMobileLinkChange}><span data-id="Home" className="mobile-links mobile-home">Home</span></li>
                    <li onClick={handleMobileLinkChange}><span data-id="About" className="mobile-links">About</span></li>
                    <li onClick={handleMobileLinkChange}><span data-id="Services" className="mobile-links">Services</span></li>
                    <li onClick={handleMobileLinkChange}><span data-id="Portfolio" className="mobile-links">Portfolio</span></li>
                    {/* <li onClick={handleMobileLinkChange}><span data-id="Contact" className="mobile-links">Contact</span></li> */}
                </ul>
                {
                    <div className="header-socialmedia-nav-mobile">
                        <SocialMediaNav style={{zIndex: 100, width: "100%" }} />
                    </div>
                }
            </nav>
        </div>
    )
}

export default MobileMenu;