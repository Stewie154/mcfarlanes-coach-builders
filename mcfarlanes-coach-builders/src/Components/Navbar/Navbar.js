import React from 'react'
import './Styles/_Navbar.scss';
import {GiHamburgerMenu} from 'react-icons/gi';

const Navbar = ({ isOpen, toggleMenu }) => {
    return (
        <div className="navbar-container">
            <div className="logo">
                <h2>McFarlane's Coach Builders</h2>
            </div>
            <div className="nav-links-container" style={ isOpen ? {right: "0px"} : {right: "-1000px"} } >
                <p className="nav-link">
                    About
                </p>
                <p className="nav-link">
                    Previous Work
                </p>
                <p className="nav-link">
                    Contact
                </p>
            </div>
            <GiHamburgerMenu className="menu-icon"
                onClick={toggleMenu}
                
            />
        </div>
    )
}

export default Navbar
