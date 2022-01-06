import React from "react";
import '../../../packages/animate.css';
import './About.css';

const About = () => {
    return (
        <div className="abt-sty-cover">
            <div className="col-12 animated fadeIn">
                <div className="heading col-6 mx-auto">
                    <h3>About Me</h3>
                </div>
                <div className="about-me col-12 col-lg-9 mx-auto mt-3">
                    <article className="mt-2 animated fadeIn" style={{animationDelay: '0.1s', 
                        animationTimingFunction: 'linear'
                        }}>   
                        I am an experienced professional Fullstack Software Developer, with core competence as a Frontend Developer.
                        I build responsive web apps and scalable APIs using modern web technologies.
                    </article>
                    <article className="mt-3 animated fadeIn" style={{animationDelay: '0.2s', 
                        animationTimingFunction: 'linear'
                        }}>   
                       My core programming skills are 
                       <b style={{color: 'skyblue'}}> HTML</b>, 
                       <b style={{color: 'skyblue'}}> CSS</b> (SASS/SCSS, Material Ui, Tailwind, Boostrap), and
                       <b style={{color: 'skyblue'}}> JAVASCRIPT</b> (ES6, React, VueJS, NodeJS).
                       I am also experienced in 
                       <b style={{color: 'skyblue'}}> Web3</b>,
                       <b style={{color: 'skyblue'}}> DBMS</b> (MongoDB, PostgreSQL, Firebase, Google Cloud),
                       <b style={{color: 'skyblue'}}> NGINX</b> configuration, and
                       <b style={{color: 'skyblue'}}> Git</b> version control.
                    </article>
                    {/* <article className="mt-3 animated fadeIn" style={{animationDelay: '0.3s', 
                        animationTimingFunction: 'linear'
                        }}>
                        I am a team player and a goal-getter, I have solved major programming problems with different organizations, 
                        transparency and integrity is the key to my business success, i have a drive that keeps me going 
                        <span style={{color: '#e83e8c'}}> "If someone has done it, then i can do better"</span>.
                    </article> */}
                </div>
            </div>
        </div>
    )
}

export default About;