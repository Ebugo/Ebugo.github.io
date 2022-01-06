import React, { useState, useEffect } from 'react';
import SocialMediaNav from '../SocialMediaNav/SocialMediaNav';
import MobileMenu from '../MobileMenu/MobileMenu';
import './Header.css';
import {
  useAppContext,
  useDispatchAppContext,
} from '../../../react-wrapper/Context/AppContext/AppContext';


const Header = ({onSelectLinkSwitch}) => {

  const appContext = useAppContext();
  const dispatchAppContext = useDispatchAppContext();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      let x = window.matchMedia("(max-width: 768px)")
      checkIfMobile(x);
       x.addListener(checkIfMobile)
  }, [isMobile])


  const handleMobileLinkChange = async (link) => {
    console.log(link)
    onSelectLinkSwitch(link)
  }

  const handleLinkChange = (e) => {
    const link = e.target.dataset.id

    Array.from(document.querySelectorAll('.laptop-links')).map(element => {
      const checkIfClass = element.classList.contains('color-tweak');
      if (checkIfClass) {
        element.classList.remove('color-tweak')
      }
    });

    e.target.classList.add('color-tweak');

    onSelectLinkSwitch(link)
  }

  const checkIfMobile = (x) => {
    x.matches ? setIsMobile(true) : setIsMobile(false);
  }


console.log(appContext)
  return (
    <>
      <div className="header-sty-cover">
        <div className="col-12 mx-0 px-0 row">
          <div className="col-8 col-md-3 text-left header-logo">
            <a href="/">
                <code><span>&#8801;</span>bugo</code>
            </a>
          </div>

          {isMobile ? <MobileMenu onSelectMobileLinkSwitch={handleMobileLinkChange} />
            :
            <div className="col-9 header-link">
              <ul className="list-group list-group-horizontal">
                <li onClick={handleLinkChange} data-id="Home" className="list-group-item laptop-links color-tweak">Home</li>
                <li onClick={handleLinkChange} data-id="About" className="list-group-item laptop-links">About</li>
                <li onClick={handleLinkChange} data-id="Services" className="list-group-item laptop-links">Services</li>
                <li onClick={handleLinkChange} data-id="Portfolio" className="list-group-item laptop-links">Portfolio</li>
                {/* <li onClick={handleLinkChange} data-id="Contact" className="list-group-item laptop-links">Contact</li> */}
              </ul>
            </div>
          }

        </div>
      </div>
      {
        appContext.page === "Home" && 
        <div className="header-socialmedia-nav">
          <SocialMediaNav />
        </div>
      }
    </>
  ) 
}

export default Header;