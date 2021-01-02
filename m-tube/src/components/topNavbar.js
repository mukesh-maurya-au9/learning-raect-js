// import React,{Component} from 'react';
import '../pages/pageCSS/style.css';
import { AiOutlineMenu } from "react-icons/ai";
import { IoLogoYoutube, IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return (
        <div className="row navbar">
            <div className="topnav">
                <form className="menu">
                    <Link to="#" className="menu"><AiOutlineMenu /></Link>
                    <Link to="/" className="menu"><IoLogoYoutube /></Link>
                    <Link to="/" className="menu">M-Tube</Link>
                <div className="searchDiv">
                    <input className="serchBox" type="text" placeholder="Search.." name="search"/>
                    <button><IoIosSearch/>Search</button>
                </div>
                </form>
                <div className="topNav">
                    <button>Sign In</button><br/>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
