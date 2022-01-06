import React, {Component} from 'react';
import '../../../packages/animate.css';
import './Footer.css';

class Footer extends Component {
    state = {
        testimonialFlicker: 1
    }
    timer = null;

    componentDidMount() {
        this.timer = setInterval(() => {
            this.slideTestimonials()
        }, 10000);
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    slideTestimonials= () => {
        this.state.testimonialFlicker < 3 ?
        this.setState({testimonialFlicker: this.state.testimonialFlicker + 1})
        : this.setState({testimonialFlicker: 1});
    }
    openRecomendation = (e) => {
        const link = e.target.dataset.link;
        window.open(link, '_blank');
    }

    render(){
        return (
            <div className="footer-sty-cover col-12 row mx-0 px-0">
                <div className="col-1 col-md-1 page-number">
                    {this.props.page === "Home" ? <h1>&#49;</h1> : null}
                    {this.props.page === "About" ? <h1>&#50;</h1> : null}
                    {this.props.page === "Services" ? <h1>&#51;</h1> : null}
                    {this.props.page === "Portfolio" ? <h1>&#52;</h1> : null}
                    {this.props.page === "Contact" ? <h1>&#53;</h1> : null}
                </div>
                {/* <div className="col-md-5 testimonials p-0">
                     {this.state.testimonialFlicker === 1 ? 
                        <div className="animated fadeIn">
                            <blockquote className="testionial-text">
                                <span>I</span> am well pleased in working with Mr Okechukwu, 
                                he is passionate and excellent in what 
                                he does, most importantly he make sure to get the job done.
                            </blockquote>
            
                            <a href="https://www.linkedin.com/in/realdekings/">
                                <p className="mt-2"><small className="testimonial-name">Mr Kingsley Ihemere </small>
                                    <small className="testimonial-company">
                                        (Founder and CEO Primesoft Limited)
                                    </small>
                                </p>
                            </a>
                        </div> : null}

                      {this.state.testimonialFlicker === 2 ? 
                        <div className="animated fadeIn">
                            <blockquote className="testionial-text">
                                <span>He</span> is a goal getter and always ready to learn new technology to get the task done, he is exceptional in his own ways.
                            </blockquote>
            
                            <a href="https://www.linkedin.com/in/frank-eluaka/">
                                <p className="mt-2"><small className="testimonial-name">Frank Eluaka </small>
                                    <small className="testimonial-company">
                                        (Senior Strategy Manager Heckerbella Limited)
                                    </small>
                                </p>
                            </a>
                        </div>
                     : null}
                     
                      {this.state.testimonialFlicker === 3? 
                        <div className="animated fadeIn">
                            <blockquote className="testionial-text">
                                <span>If</span> the aim is getting your product completely done job with acurracy
                                 and attention to details, then he is the man for the job, I recommend him anytime.
                            </blockquote>
            
                            <a href="https://www.linkedin.com/in/oluwamayowa-fadairo-6460b282/">
                                <p className="mt-2">
                                    <small className="testimonial-name">Oluwamayowa Fadairo </small>
                                    <small className="testimonial-company">
                                        (Software Engineer at Tracksend)
                                    </small>
                                </p>
                            </a>
                        </div>
                     : null}
                    
                </div> */}

                <div className="col-11 col-md-6 recommendation-cover mr-10">
                    <div className="recomendations m-0 col-12 row">
                        {/* <p className="col-12 mb-0 p-0" style={{color: "#e83e8c"}}>Recomendations</p>
                        <div className="link col-12 p-0">
                            <span onClick={this.openRecomendation} data-link="https://www.linkedin.com/company/heckerbella-limited/" className="px-1 a">Heckerbella</span>
                            <span onClick={this.openRecomendation} data-link="https://www.linkedin.com/in/ndiecodes/" className="px-1 b">NdieCodes</span>
                            <span onClick={this.openRecomendation} data-link="https://www.linkedin.com/in/oluwamayowa-fadairo-6460b282/" className="px-1 c">Oluwamayowa Fadairo</span>
                            <span onClick={this.openRecomendation} data-link="https://www.linkedin.com/company/primedsoft" className="pl-1 d">Primesoft</span>
                        </div>
                        <span className="col-12 mt-1 mt-md-2 mt-lg-2 p-0 copy-right">Copyright © 2021 Ebugo | All rights reserved</span> */}
                        {/* <span className="col-12 mt-5 p-0 copy-right">Copyright © {new Date().getUTCFullYear()} Ebugo | All rights reserved</span> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;