import React from 'react';
import '../../../packages/animate.css';
import '../../../packages/scrollerdesign.css';
import './Portfolio.css';

const Portfolio = () => {
    const portfolio = [
        {
            title: "Sifuse",
            url: "https://sifuse.com",
            stack: "Laravel, React.js, Next.js, Tailwind, NGINX, SASS, JavaScript",
            desc: "This is a web app that connects startups and investors with various requirement testing feature to validate the right investment to allocate.",
        },
        {
            title: "",
            url: "",
            stack: "",
            desc: "",
        },
        {
            title: "",
            url: "",
            stack: "",
            desc: "",
        },
        // {
        //     title: "GateGuard",
        //     url: "https://gateguard.co",
        //     stack: "Laravel, Flutter, HTML, CSS, JavaScript",
        //     desc: "This is a security estate management app, it was build as a mobile app that allows user to control thier visitors and also help estates managers to manage there estate bills.",
        // },
    ]
    return (
        <div className="portfolio-sty-cover">
            <div className="col-12 animated fadeIn">
                <div className="heading col-6 mx-auto">
                    <h3>I Built</h3>
                </div>
                <div className="ibuild scroller col-12 mt-2 m-0 p-0">
                    <div className="block col-11 mx-auto p-0 m-0 row">
                        {portfolio.map(({ title, url, stack, desc }) => (
                            <div className="p-3" key={title}>
                                <div className="build-show animated fadeIn" style={{
                                    animationDelay: '0.2s',
                                    animationTimingFunction: 'linear'
                                }}>
                                    <a href={url} target="_blank" rel="noopener noreferrer">
                                        <h5>{title}</h5>
                                        <p><small>Tech Used: {stack}</small></p>
                                        <p>{desc}</p>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;