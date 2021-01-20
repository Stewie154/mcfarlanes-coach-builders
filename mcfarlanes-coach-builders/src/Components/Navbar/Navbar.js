import React from 'react'
import './Styles/_Navbar.scss';
import logo from '../../Images/Logo.JPG';
import {GiHamburgerMenu} from 'react-icons/gi';
import { Link } from 'react-scroll';

const Navbar = ({ isOpen, toggleMenu }) => {
    return (
        <div className="navbar-container">
            <div className="logo">
                <img src={logo} alt="Logo" className="logo-picture"/>
                {/* <h2>McFarlane's Coach Builders</h2> */}
            </div>
            <div className="nav-links-container" style={ isOpen ? {right: "0px"} : {right: "-1000px"} } >
                <Link to="home" smooth={true} duration={750} offset={-70}>
                    <p className="nav-link" onClick={toggleMenu}>Home</p>
                </Link>
                <Link to="about" smooth={true} duration={750} offset={-70}>
                    <p className="nav-link" onClick={toggleMenu}>About</p>
                </Link>
                <Link to="previous-work" smooth={true} duration={750} offset={-70}>
                    <p className="nav-link" onClick={toggleMenu}>Previous Work</p>
                </Link>
                <Link to="links" smooth={true} duration={750} offset={-70}>
                    <p className="nav-link" onClick={toggleMenu}>Links</p>
                </Link>
                <Link to="contact" smooth={true} duration={750} offset={-70}>
                    <p className="nav-link" onClick={toggleMenu}>Contact</p>
                </Link>
            </div>
            <GiHamburgerMenu className="menu-icon"
                onClick={toggleMenu}
                
            />
        </div>
    )
}

export default Navbar
