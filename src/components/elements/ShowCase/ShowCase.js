import React, { Component } from 'react';
import FirstShowCase from '../FirstShowCase/FirstShowCase';
// import SecoundShowCase from '../SecoundShowCase/SecoundShowCase';
// import ThirdShowCase from '../ThirdShowCase/ThirdShowCase';
import './ShowCase.css';

class ShowCase extends Component {
    state = {
        imageFlicker: 1
    }
    timer = null;

    // componentDidMount() {
    //     this.timer = setInterval(() => this.changeShowcaseImage(), 7000);
    // }

    // componentWillUnmount(){
    //     clearInterval(this.timer);
    // }

    // changeShowcaseImage = () => {
    //     this.state.imageFlicker < 3 ? 
    //             this.setState({imageFlicker: this.state.imageFlicker + 1 })
    //         : this.setState({imageFlicker: 1});
    // }

    render(){
        return (
            <div className="col-12 showcase-sty-cover">
                <FirstShowCase onByPassClick={this.props.onTalkToMeClick}/>
                {/* {this.state.imageFlicker === 2 ? <SecoundShowCase/> : null}
                {this.state.imageFlicker === 3 ? <ThirdShowCase /> : null} */}
            </div>
        )
    }

}

export default ShowCase;