import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import ListingAPI from './components/listing/ListingAPI';
import ListingDisplay from './components/listing/ListingDisplay';
// import listingdetails from './components/listing/Listingdetails';
// import Detailsdisplay from './components/details/Detailsdisplay';


const Routing = () => {
    return(
        <BrowserRouter>
            <React.Fragment>
                <Header/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/list/:id" component={ListingAPI}/>
                    <Route path="/details/:id" component={ListingDisplay}/>
                    {/* <Route exact path="/" component={Home}/>
                    <Route  path="/list/:id" component={ListingApi}/>
                    <Route  path="/details/:id" component={Details}/> */}
                <Footer/>
            </React.Fragment>
        </BrowserRouter>
    ) 
};
export default Routing;