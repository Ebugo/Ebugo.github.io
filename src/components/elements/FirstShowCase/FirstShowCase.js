import React from 'react';
import ShowCaseMiddleText from '../ShowCaseMiddleText/ShowCaseMiddleText';
import JuniCodesImage from '../JuniCodesImage/JuniCodesImage';
import './FirstShowCase.css';

const FirstShowCase = (props) => {
    return (
        <div className="col-12 row m-0 p-0 firstshowcase-sty-cover">
            <div className="col-12 mx-auto col-lg-7 text-noted">
                <ShowCaseMiddleText  onStartClick={props.onByPassClick}/>
            </div>
            <div className="col-lg-5 image-grid">
                <JuniCodesImage />
            </div>
        </div>
    )
}

export default FirstShowCase