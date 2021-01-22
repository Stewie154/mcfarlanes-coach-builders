import React from 'react'
import './Styles/_About.scss';
import stockImage from '../../Images/Stock-Image-Worker.jpg';

const About = () => {
    return (
        <div className="about-wrapper" id="about">
            <h1>About McFarlane's Coach Builders</h1>
            <div className="about-container">
                <div className="about-left">
                    <p>Steve McFarlane is a coach builder who specializes in building aluminium body shells. With over 35 years of experience producing quality work for hundreds of customers from all over the world, some of his expertise include: </p>
                    <ul>
                        <li>Bespoke personal coachbuilding experience.</li>
                        <li>From a rolling chassis to  a sculptured bodyshell.</li>
                        <li>Independent designs from our specifications to your approval.</li>
                        <li>Unique service for private clients.</li>
                    </ul>
                </div>
                <div className="about-right">
                    <img src={stockImage} alt="Coach Builder Working" className="working-pic" />
                </div>
            </div>
        </div>
        
    )
}

export default About
