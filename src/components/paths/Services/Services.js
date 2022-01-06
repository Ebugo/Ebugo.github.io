import React from 'react';
import './Services.css';

const Contact = () => {
    return (
        <div className="services-sty-cover">
            <div className="col-12 animated fadeIn">
                <div className="heading col-6 mx-auto">
                    <h3>Services</h3>
                </div>
                <div className="services">
                    <div className="block-1 col-12 col-lg-10 row mx-auto mt-2">
                        <div className="mb-2 col-12 col-md-6 col-lg-6 mx-auto animated fadeIn" style={{animationDelay: '0.2s', 
                        animationTimingFunction: 'linear'
                        }}>
                            <h5>Web Development</h5>
                            <p>
                                I build responsive web applications using modern web technologies 
                                such as 
                                <b style={{color: 'skyblue'}}> HTML/CSS</b>, 
                                <b style={{color: 'skyblue'}}> React (CRA + Next.js framework)</b>, Vanilla
                                <b style={{color: 'skyblue'}}> JavaScript </b> and 
                                <b style={{color: 'skyblue'}}> NodeJS/Express/MongoDb/Postgres </b> .
                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 mx-auto animated fadeIn mb-2" style={{animationDelay: '0.4s', 
                        animationTimingFunction: 'linear'
                        }}>
                            <h5>Community Building / Public Speaking</h5>
                            <p>
                                I have 2yrs+ of experience as a <b style={{color: 'skyblue'}}> Google Developer Groups </b>
                                community (GDG Owerri) lead organizer. I find fulfilment in community building and growth. 
                                I also derive joy in speaking at events about select topics.
                            </p>
                        </div>
                    </div>
                    <div className="block-2 col-12 col-lg-10 mx-auto row mt-2">
                        <div className="col-12 col-md-6 col-lg-6 mx-auto animated fadeIn mb-2" style={{animationDelay: '0.6s', 
                        animationTimingFunction: 'linear'
                        }}>
                            <h5>Team Management</h5>
                            <p>
                                I have the leadership skills for managing a software team, 
                                in the past years I have handled different teams and that has broadened my experience as a Software Engineer,
                                this has enabled me to mitigate unforeseen errors. 
                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 mx-auto animated fadeIn mb-2" style={{animationDelay: '0.8s', 
                        animationTimingFunction: 'linear'
                        }}>
                            <h5>Others Specialties</h5>
                            <p>
                                I also have some amount of knowlegde in some other skillset, such as:
                                <b style={{color: 'skyblue'}}> Git Control</b>,
                                <b style={{color: 'skyblue'}}> Linux </b>, 
                                <b style={{color: 'skyblue'}}> NGINX</b> 
                                <b style={{color: 'skyblue'}}> Database Design (MongoDB, Postgresql) </b>. 
                                I use them mostly on my daily task and it has made my workflow better and faster.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;