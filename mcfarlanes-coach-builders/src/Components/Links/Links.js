import React from 'react'
import './Styles/_Links.scss';
import alwynScreenshot from '../../Images/Alwyn-Lee-Screenshot.JPG'
import { linksData } from './data';
const Links = () => {
    return (
        <div className="links-wrapper">
            <h1 className="title" >Useful Links</h1>
            <p className="desc">Here are some links to people I've worked with:</p>
            <div className="links-container">
                {linksData.map( (link) => {
                    return (
                        <div className="link">
                            <div className="left">
                                <a href={link.href} rel="noreferrer" target="_blank">
                                    <img src={link.screenshot} alt={link.alt} className="link-screenshot"/>
                                </a>
                            </div>
                            <div className="right">
                                <h2 className="link-title">{link.title}</h2>
                                <p className="link-desc">{link.desc}</p>
                                <a href={link.href} rel="noreferrer" target="_blank" className="link-href">{link.href}</a>
                            </div>
                        </div>
                    )
                } )}
                {/* <div className="link">
                    <div className="left">
                        <a href="https://alwynlee.co.uk/" rel="noreferrer" target="_blank">
                            <img src={alwynScreenshot} alt="Alwyn Lee Coachbuilders" className="link-screenshot"/>  
                        </a>
                    </div>
                    <div className="right">
                        <h2 className="link-title">Alwyn Lee Coachbuilders</h2>
                        <p className="link-desc">Ash frame specialist.</p>
                        <a href="https://alwynlee.co.uk/" rel="noreferrer" target="_blank" className="link-href">www.alwynlee.co.uk</a>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Links
