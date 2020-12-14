import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/Home';
import { BrowserRouter, Route } from 'react-router-dom';

const Routing = () => {
    return(
        <BrowserRouter>
            <React.Fragment>
                <Header/>
                    <Route path="/" exact component={Home}/>
                <Footer/>
            </React.Fragment>
        </BrowserRouter>
    ) 
};
export default Routing;