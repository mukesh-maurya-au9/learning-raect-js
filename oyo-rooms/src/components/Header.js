import React from 'react';
import './componentStyle.css';
import HeaderDropDown from './HeaderDropDown';

const Header = ()=>{
    return (
        <React.Fragment>
            <nav className="navbar-login">
                <input id="navbar-login" type="submit" value="Login/Signup"/>
                <HeaderDropDown />
            </nav>
            
        </React.Fragment>
    )
};
export default Header;