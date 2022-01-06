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
            <h5>Connect</h5>
            <div className="social">
                <div onClick={openSocial} className="facebook">
                    <span className="mt-2 social-name">facebook</span>
                    <img data-link="https://web.facebook.com/codebug" className="m-1" src="/images/social/facebook.svg" alt="facebook"/>    
                </div>
                <div onClick={openSocial} className="github">
                    <span className="mt-2 social-name">github</span>
                    <img  data-link="https://github.com/codebug" className="m-1" src="/images/social/github.svg" alt="github"/>
                </div>
                <div onClick={openSocial} className="twitter">
                    <span className="mt-2 social-name">twitter</span>
                    <img data-link="https://twitter.com/codebug" className="m-1" src="/images/social/twitter.svg" alt="twitter"/>
                </div>
                <div onClick={openSocial} className="linkedIn">
                    <span className="mt-2 social-name">linkedIn</span>
                    <img data-link="https://linkedin.com/in/okechukwu-obi-746161196" className="m-1" src="/images/social/linkedin.svg" alt="linkedIn"/>
                </div>
                <div onClick={openSocial} className="instagram">
                    <span className="mt-2 social-name">instagram</span>
                    <img data-link="https://www.instagram.com/codebug" className="m-1" src="/images/social/instagram.svg" alt="instagram"/>
                </div>
                <div onClick={openSocial} className="whatsapp">
                    <span className="mt-2 social-name">whatsapp</span>
                    <img data-link="https://wa.me/+2347060959269" className="m-1" src="/images/social/whatsapp.svg" alt="whatap"/>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaNav;