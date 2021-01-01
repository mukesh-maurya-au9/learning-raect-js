import React from 'react';
import './style.css';
import { AiOutlineMenu } from "react-icons/ai";
import { IoLogoYoutube, IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="row navbar">
            <div className="topnav">
                <form className="menu">

                <Link to="/" className="menu"><AiOutlineMenu /></Link>
                <Link className="menu"><IoLogoYoutube /></Link>
                <Link className="menu">M-Tube</Link>               
                <form>
                    <input type="text" placeholder="Search.." name="search"/>
                    <button><IoIosSearch/>Search</button>
                </form>
                </form>
                <div className="topNav">
                    <button>Sign In</button><br/>
                </div>
            </div>
        </div>

    )
};
export default Navbar;