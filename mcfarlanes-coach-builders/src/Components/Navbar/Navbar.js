import React from 'react'
import './Styles/_Navbar.scss';
import logo2 from '../../Images/Logo2';
import {GiHamburgerMenu} from 'react-icons/gi';
import { Link } from 'react-scroll';

const Navbar = ({ isOpen, toggleMenu }) => {
    return (
        <div className="navbar-container">
            <div className="logo">
                <Link to="home" smooth={true} duration={750} offset={-90}>
                    <img src={logo2} alt="Logo" className="logo-picture"/>
                </Link>   
            </div>
            <div className="nav-links-container" style={ isOpen ? {right: "0px"} : {right: "-1000px"} } >
                <Link to="home" smooth={true} duration={750} offset={-90}>
                    <p className="nav-link" onClick={toggleMenu}>Home</p>
                </Link>
                <Link to="about" smooth={true} duration={750} offset={-90}>
                    <p className="nav-link" onClick={toggleMenu}>About</p>
                </Link>
                <Link to="previous-work" smooth={true} duration={750} offset={-90}>
                    <p className="nav-link" onClick={toggleMenu}>Previous Work</p>
                </Link>
                <Link to="links" smooth={true} duration={750} offset={-90}>
                    <p className="nav-link" onClick={toggleMenu}>Links</p>
                </Link>
                <Link to="contact" smooth={true} duration={750} offset={-90}>
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
