import React, {Component} from 'react';
import ShowCase from '../../elements/ShowCase/ShowCase';
import './Home.css';


class Home extends Component{
 
    render() {
        return(
            <div className="home-sty-cover">
                <ShowCase onTalkToMeClick={this.props.onTriggerToMeClick}/>
            </div>
        )
    }
}

export default Home;
