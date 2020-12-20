import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import ListingAPI from './components/listing/ListingAPI';
import ListingDisplay from './components/listing/ListingDisplay';
// import listingdetails from './components/listing/Listingdetails';
import Details from './components/details/Detailsdisplay';
import PlaceBooking from './components/booking/PlaceBooking';
import ViewBookings from './components/booking/viewBooking'; 


const Routing = () => {
    return(
        <BrowserRouter>
            <React.Fragment>
                <Header/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/list/:id" component={ListingAPI}/>
                    <Route path="/listing/:id" component={ListingDisplay}/>
                    <Route  path="/details/:id" component={Details}/>
                    <Route  path="/booking/:id" component={PlaceBooking}/>
                    <Route  path="/ViewBookings" component={ViewBookings}/>
                <Footer/>
            </React.Fragment>
        </BrowserRouter>
    ) 
};
export default Routing;