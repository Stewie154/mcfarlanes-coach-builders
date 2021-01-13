import React from 'react'
import './Styles/_About.scss';
import stockImage from '../../Images/Stock-Image-Worker.jpg';
const About = () => {
    return (
        <div className="about-container">
            <div className="about-left">
                <h1>About McFarlane's Coach Builders</h1>
                <p>Stephen McFarlane is a coach builder specializing in building aluminium body shells. With "X" years of experience producing quality work for over "X" customers, some of his expertise include: </p>
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
    )
}

export default About
