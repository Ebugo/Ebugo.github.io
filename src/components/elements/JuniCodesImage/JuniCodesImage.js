import React from 'react';
import '../../../packages/animate.css';
import './JuniCodesImage.css';

const JuniCodesImage = () => {
    return (
        <div className="codebugimage-sty-cover">
            <img className="animated fadeIn codebug_img"
                 src="/images/personal/codebug.png" alt="Ebugo" />

            <style jsx>{`
                    .codebug_img {
                        height: 65vh;
                        margin-left: 5vh;
                        margin-top: -70px;
                        filter: 'drop-shadow(5px 16px 10px rgba(0,0,0,0.9))';
                    }
                    @media screen and (max-width: 1200px) {
                        .codebug_img {
                            height: 60vh;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default JuniCodesImage;