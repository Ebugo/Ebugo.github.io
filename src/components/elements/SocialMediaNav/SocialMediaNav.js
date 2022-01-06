import React from 'react';
import './SocialMediaNav.css';

const SocialMediaNav = ({style}) => {

    const openSocial = (e) => {
        console.log(e.target)
       const link = e.target.dataset.link;
       console.log(link)
       window.open(link, '_blank');
    } 
    return (
        <div className="socialmedia-nav-sty-cover" style={style}>
            <div className="social">
                <div onClick={openSocial} className="github">
                    <span className="mt-2 social-name">github</span>
                    <img  data-link="https://github.com/Ebugo" className="m-1" src="/images/social/github.svg" alt="github"/>
                </div>
                <div onClick={openSocial} className="twitter">
                    <span className="mt-2 social-name">twitter</span>
                    <img data-link="https://twitter.com/Codebug_" className="m-1" src="/images/social/twitter.svg" alt="twitter"/>
                </div>
                <div onClick={openSocial} className="linkedIn">
                    <span className="mt-2 social-name">linkedIn</span>
                    <img data-link="https://linkedin.com/in/gospel-chinyereugo" className="m-1" src="/images/social/linkedin.svg" alt="linkedIn"/>
                </div>
                <div onClick={openSocial} className="whatsapp">
                    <span className="mt-2 social-name">whatsapp</span>
                    <img data-link="https://wa.me/+2348109503956" className="m-1" src="/images/social/whatsapp.svg" alt="whatsapp"/>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaNav;