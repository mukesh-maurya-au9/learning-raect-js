import React, { Fragment } from 'react';
import './Style.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Fragment>
            <div className="topnav">
                <Link to="/">Trip-India</Link>
                <Link to="/">Home</Link>
                <Link to="/ViewBookings">Booking</Link>
            </div>
        </Fragment>
    )
};

export default Header;