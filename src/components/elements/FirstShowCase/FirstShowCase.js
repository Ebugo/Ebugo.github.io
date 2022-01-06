import React from 'react';
import ShowCaseMiddleText from '../ShowCaseMiddleText/ShowCaseMiddleText';
import PortfolioImage from '../JuniCodesImage/PortfolioImage';
import './FirstShowCase.css';

const FirstShowCase = (props) => {
    return (
        <div className="col-12 row  firstshowcase-sty-cover">
            <div className="col-12 mx-auto col-lg-7 text-noted">
                <ShowCaseMiddleText  onStartClick={props.onByPassClick}/>
            </div>
            <div className="col-lg-5 image-grid">
                <PortfolioImage />
            </div>
        </div>
    )
}

export default FirstShowCase