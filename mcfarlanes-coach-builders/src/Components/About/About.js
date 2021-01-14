import React from 'react'
import './Styles/_About.scss';
import stockImage from '../../Images/Stock-Image-Worker.jpg';
const About = () => {
    return (
        <div className="about-wrapper">
            <h1>About McFarlane's Coach Builders</h1>
            <div className="about-container">
                <div className="about-left">
                    <p>Stephen McFarlane is a coach builder who specializes in building aluminium body shells. With "100" years of experience producing quality work for over "100" customers, some of his expertise include: </p>
                    <ul>
                        <li>Key point</li>
                        <li>Key point</li>
                        <li>Key point</li>
                        <li>Key point</li>
                        <li>Key point</li>
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
