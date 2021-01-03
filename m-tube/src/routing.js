import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import SideNavbar from './components/sideNavbar';
import Navbar from './components/topNavbar';
import Trending from './containers/trendingContainer';
import Footer from './components/footer';
import Home from './containers/searchContainer';
import VideoDetails from './containers/details';



const Routing = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className='row'>
                <div className='col-md-2'>
                    <SideNavbar/>
                </div>
                <div className='col-md-10'>
                    <Route path="/" exact component={Home}/>
                    <Route path="/trending" exact component={Trending}/>
                    <Route exact path="/watch/:id" component={VideoDetails}/>
                </div>
            </div>
            <Footer/>
        </BrowserRouter>
    )
};
export default Routing;