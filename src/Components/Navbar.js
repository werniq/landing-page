import React from "react";
import {FiMenu, FiX} from "react-icons/fi" ;
import "./Navbar.css";

const Navbar = ({navbarLinks}) => {
    return (
        <nav className="navbar">
            <h1 className="navbar__logo">Travell</h1>
            <ul className="navbar__list">
                {navbarLinks.map(item => {
                    return (
                        <li className="navbar__item" key={item.title}>  
                            <a className="navbar__link" href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>

        </nav>
    )
}

export default Navbar;

