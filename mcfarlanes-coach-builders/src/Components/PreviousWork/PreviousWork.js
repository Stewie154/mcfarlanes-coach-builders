import React from 'react'
import './Styles/PreviousWork.scss';
import { prevWorkData } from './PreviousWorkData';
const PreviousWork = () => {
    return (
        <div className="wrapper">
            <div className="title-info">
                <h1>Previous Work</h1>
                <p>Feel free to take a look at some of Stephen's previous work below.</p>
            </div>
            <div className="prev-work-container">
                {prevWorkData.map((job, index) => {
                    return (
                        <div className="job" key={index}>
                        <img src={job.src} alt="Classic Car"/>
                        <h2>{job.title}</h2>
                        <p>{job.desc}</p>
                        </div>
                    )
                } )}
            </div>
        </div>
    )
}

export default PreviousWork
