import React, { useState, useEffect } from 'react';
import Header from "../elements/Header/Header";
import Footer from "../elements/Footer/Footer";
import Home from "../paths/Home/Home";
import About from "../paths/About/About";
import Services from "../paths/Services/Services";
import Portfolio from "../paths/Portfolio/Portfolio";
import Contact from "../paths/Contact/Contact";
import {
    useAppContext,
    useDispatchAppContext,
  } from '../../react-wrapper/Context/AppContext/AppContext';

const App = () => {

    const appContext = useAppContext();
    const dispatchAppContext = useDispatchAppContext();

    const { page } = appContext;

    console.log(appContext)

    const handleLinkSwitch = (link) => {
        console.log(link)
        // setPage(link)
        dispatchAppContext({
            type: 'CURRENT_PAGE',
            payload: link,
        });
    }

    return (
        <div className="app-container">
            <Header onSelectLinkSwitch={handleLinkSwitch}/>
            {page === 'Home' ? <Home onTriggerToMeClick={handleLinkSwitch}/> : null}
            {page === 'About' ? <About/> : null}
            {page === 'Services' ? <Services/> : null}
            {page === 'Portfolio' ? <Portfolio/> : null}
            {page === 'Contact' ? <Contact/> : null}
            <Footer page={page}/>
        </div>
    )

}


export default App;
