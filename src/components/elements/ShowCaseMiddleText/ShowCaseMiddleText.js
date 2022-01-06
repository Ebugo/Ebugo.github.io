import React from 'react';
import '../../../packages/animate.css';
import './ShowCaseMiddleText.css';

const ShowCaseMiddleText = (props) => {

    const onBeginClick = (e) => {
        const url = e.target.dataset.pdf
        let link = document.createElement('a');
            link.href = url;
            link.download = 'gospel_chinyereugo_resume.pdf';
            link.dispatchEvent(new MouseEvent('click'));
          
    }
    return (
        <div className="showcasemiddle-text-sty-cover animated fadeIn" style={{animationDelay: '0.5s', animationTimingFunction: 'linear'}}>
            <p style={{color: 'skyblue'}}>Hello, I am</p>
            <h1>Gospel Chinyereugo</h1>
            <p className="title">Full-Stack Web Developer</p>
            <button onClick={onBeginClick} className="" data-pdf="/images/personal/resume.pdf">Download Resume</button>
        </div>
    )
}

export default ShowCaseMiddleText;