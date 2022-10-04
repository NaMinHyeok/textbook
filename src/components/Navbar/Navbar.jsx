import React from "react";
import { MenuItems } from "./MenuItems.js";
import "./Navbar.css";

function Navbar(){
    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
            <div className="menu-icon"></div>
            <ul className="nav-menu">
                {MenuItems.map((item,index)=>{
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>{item.title}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Navbar;