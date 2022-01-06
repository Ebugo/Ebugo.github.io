import React, {Component, createRef} from 'react';
import Modal from '../../tools/Modal/Modal';
import '../../../packages/scrollerdesign.css';
import './Contact.css';

class Contact extends Component{

    phoneInputRef = createRef();
    state = {
        modalTrigger: false,
        modalTitle: 'Contact Successful',
        modalInfo: 'Thank you for successfully contacting me, i will reach back to you in no time.'
    }

    contactUs = (e) => {
        e.preventDefault();
         document.querySelector('#contact-btn').innerHTML = `
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
         `;
        const formData = new FormData(e.target);
     
        if(this.phoneInputRef.current.value === '') {
             formData.set('sender_phone', 'No Phone Specified') 
         }
        this.sendMail(formData, e.target); //Send the data to the ajax request to mail
    }

    sendMail = (formData, form) => {
        console.log('open server')
        fetch('https://codebug-server.herokuapp.com/api/mail', {
                method: 'POST',
                mode: "cors",
                body: formData
            }) 
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.success === "Mail Sent") {
                    document.querySelector('#contact-btn').innerHTML = `Send`;
                    form.reset();
                    this.setState({modalTrigger: true});
                }
                
            })
            .catch(err => console.log(err))
    }
    handleModalTrigger = (trigger) => {
        this.setState({modalTrigger: trigger});
    }
    openSocial = (e) => {
        const link = e.target.dataset.url;
        window.open(link, '_blank');
    }

    render(){
        return (
            <div className="contact-sty-cover">
                {this.state.modalTrigger ?  <Modal onSelectModal={this.handleModalTrigger}
                    title={this.state.modalTitle} info={this.state.modalInfo}
                /> : null}
                <div className="col-12 animated fadeIn">
                    <div className="heading col-12 col-lg-6 mx-auto">
                        <h3>Contact Me</h3>
                    </div>
                    <div className="col-12 col-md-10 col-lg-10 mx-auto row mt-3 p-0 contact-grid scroller">
                        <div className="col-12 mx-auto col-lg-6 row contact-info p-lg-4">
                            <div className="col-8 m-0 p-0">
                                <p>Email : codebug@gmail.com</p>
                                <p>Phone : +2347060959269</p>
                                <p>Facebook : <span onClick={this.openSocial} data-url="https://web.facebook.com/codebug">open</span></p>
                                <p>Github :   <span onClick={this.openSocial} data-url="https://github.com/codebug">open</span></p>
                            </div>
                            <div className="col-4 m-0 p-0">
                                <p>LinkedIn :  <span onClick={this.openSocial} data-url="https://www.linkedin.com/in/okechukwu-obi-746161196/">open</span></p>
                                <p>Twitter :   <span onClick={this.openSocial} data-url="https://twitter.com/codebug">open</span></p>
                                <p>Instagram : <span onClick={this.openSocial} data-url="https://www.instagram.com/codebug/">open</span></p>
                                <p>Whatapp :   <span onClick={this.openSocial} data-url="https://wa.me/+2347060959269">open</span></p>
                            </div>
                        </div>
                        <div className="col-12 mx-auto col-lg-6 contact-form">
                            <form onSubmit={this.contactUs}>
                                 <div className="form-group m-0">
                                    <label htmlFor="subject">Subject<span style={{color: 'red'}}> *</span></label>
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="eg. Job Offer, Coding Tutorial" required/>
                                </div>
                                <div className="form-group m-0">
                                    <label htmlFor="subject">Name <span style={{color: 'red'}}> *</span></label>
                                    <input type="name" className="form-control" name="name" id="sender_name" placeholder="eg. John Doe" required/>
                                </div>
                                <div className="col-12 row m-0 p-0">
                                    <div className="form-group col-6 m-0 p-0 pr-1">
                                        <label htmlFor="email">Email address <span style={{color: 'red'}}> *</span></label>
                                        <input type="email" className="form-control" name="email" id="sender_email" placeholder="eg. name@example.com" required/>
                                    </div>
                                    <div className="form-group col-6 m-0 p-0 pl-1">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="tel" ref={this.phoneInputRef} className="form-control" name="phone" id="sender_phone" placeholder="eg. +234700******"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message <span style={{color: 'red'}}> *</span></label>
                                    <textarea className="form-control" name="message" id="message" rows="3" placeholder="Type a message" required></textarea>
                                </div>
                                <button type="submit" id="contact-btn" className="btn btn-outline-primary col-12 col-md-4 col-lg-3">
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;