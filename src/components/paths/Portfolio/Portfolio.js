import React from 'react';
import '../../../packages/animate.css';
import '../../../packages/scrollerdesign.css';
import './Portfolio.css';

const Portfolio = () => {
    const portfolio = [
        {
            title: "Sifuse",
            url: "https://sifuse.com",
            stack: "React/Next.js, Tailwind, NGINX, SASS, Laravel",
            desc: "This is a web app that connects startups and investors with various requirement testing feature to validate the right investment to allocate.",
        },
        {
            title: "Nuthoop",
            url: "https://nuthoop.com",
            stack: "React/Next.js, Material UI, SCSS",
            desc: "This is a web app that seeks to improve the nutritional content of food being sold to the people of Lagos, Nigeria.",
        },
        {
            title: "ScoutBallers",
            url: "https://www.scoutballers.com/",
            stack: "HTML, CSS/Bootstrap, Javascript",
            desc: "A platform that connects Players, Scouts / Agents, Club Managers and Students to each other.",
        },
        {
            title: "Ricive Waitlist",
            url: "https://www.tryricive.com/",
            stack: "React/Nextjs, Scss, Material UI, Nodejs + Typescript",
            desc: "Wailist web app for Ricive.com",
        },
        {
            title: "Ricive",
            url: "https://www.ricive.com/",
            stack: "React/Nextjs, Scss, Material UI, Tailwind",
            desc: "A web app that helps you create a world where you never leave your home for groceries or worry over getting laundry done.",
        },
        {
            title: "Kobobid",
            url: "https://kobobid.com/",
            stack: "Nodejs, HTML, JS/JQuery, Websockets, CSS",
            desc: "A fast-paced bidding website where you can win and purchase some of your favorite, AUTHENTIC items for as little as ONE Kobo by bidding.",
        },
        // {
        //     title: "",
        //     url: "",
        //     stack: "",
        //     desc: "",
        // },
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