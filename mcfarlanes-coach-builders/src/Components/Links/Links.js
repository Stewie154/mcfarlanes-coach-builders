import React from 'react'
import './Styles/_Links.scss';
import { linksData } from './data';
const Links = () => {
    return (
        <div className="links-wrapper" id="links">
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
            </div>
        </div>
    )
}

export default Links
