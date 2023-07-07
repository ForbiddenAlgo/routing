import React from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";

const Navbar =() =>{
    return(
        <>
            <nav className="nav-container">
                {/* three divisions */}
                {/* first for logo, on top left */}
                <div className="logo">
                    <h2><span>R</span>outing
                    </h2>
                </div>
                {/* second: list of navigating menus */}
                <div className="menu-link">
                    <ul>
                        {/* <a href="#"></a> */}
                        <NavLink to={'/'} activeStyle={{color: "yellow"}}> 
                            Home 
                        </NavLink>
                        <NavLink to ={'/Product'} activeStyle={{color: "yellow"}}>
                            Products
                        </NavLink>
                        <NavLink to ={'/About-us'} activeStyle={{color: "yellow"}}>
                            About Us
                        </NavLink>
                        <NavLink to ={'/Contact-us'} activeStyle={{color: "yellow"}}>
                            Contact Us
                        </NavLink>
                    </ul>
                </div>

                {/* third: social media links  */}
                {/* <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a href="{from react icons}" target="{to open in new tab}">FaFacebookSquare</a>
                        </li>
                        <li>
                            <a href="{from react icons}" target="{to open in new tab}">FaFacebookSquare</a>
                        </li>
                        <li>
                            <a href="{from react icons}" target="{to open in new tab}">FaFacebookSquare</a>
                        </li>
                    </ul>
                </div> */}
            </nav>
        </>
    )
}

export default Navbar