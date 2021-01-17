import React from 'react';
import './Styles/_Contact.scss';
import { AiOutlineLinkedin } from 'react-icons/ai';


const Contact = () => {
    return (
        <div className="contact-wrapper">
            <h1>Contact</h1>
            <div className="map-container">
                <div className="info-box">
                    <p className="inquiries">For inquiries, please contact Stephen McFarlane via telephone or email.</p>
                </div>
                <div className="info-box">
                    <h2>Where to find us:</h2>
                    <p>The Nook,</p>
                    <p>Bentley Road,</p>
                    <p>Little Bentley,</p>
                    <p>Colchester,</p>
                    <p>Essex,</p>
                    <p>CO7 8SS</p>
                    <button>
                        <a 
                            href="https://www.google.com/maps/dir/51.9012352,1.0682368/Steve+McFarlane+Coach+Builders,+The+Nook,+Bentley+Rd,+Colchester+CO7+8SS/@51.9025644,1.0594646,16z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x47d90c274b2ab6c9:0x8cc97e1e8a1d9567!2m2!1d1.0594471!2d51.9056537!3e0"
                            target="_blank"  
                            rel="noreferrer"  
                        >
                        Directions
                        </a>
                    </button>
                </div>
            </div>
            <div className="contact-info-container">
                <a href="mailto:stevemcfarlane@btinternet.com" rel="noreferrer" target="_blank"><p>stevemcfarlane@btinternet.com</p></a>
                <AiOutlineLinkedin className="linked-in" />
                <div className="phone-numbers-container">
                    <p>+44(0) 1206 250239 (Home)</p>
                    <p>+44(0) 7778 593651 (Mobile)</p>
                </div>
                
            </div>
            <p className="plug">Website by Stewart McFarlane</p>
        </div>
    )
}

export default Contact
