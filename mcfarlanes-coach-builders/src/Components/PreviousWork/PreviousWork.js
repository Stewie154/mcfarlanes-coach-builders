import React, {useState} from 'react'
import './Styles/PreviousWork.scss';
import { FaTimesCircle } from 'react-icons/fa';
import { prevWorkData } from './PreviousWorkData';
const PreviousWork = () => {

    const [bigPic, setBigPic] = useState(false);

    const toggleBigPic = () => {
        setBigPic(!bigPic);
    }

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
                        <img src={job.src} alt="Classic Car" className="small-pic" onClick={toggleBigPic}/>
                        <h2>{job.title}</h2>
                        <p>{job.desc}</p>
                        <FaTimesCircle className={ bigPic ? "display-icon" : "hide" } onClick={toggleBigPic}/>
                        <img src={job.src} alt="Classic Car" className={ bigPic ? "display-big-pic" : "hide" }/>
                        </div>
                    )
                } )}
            </div>
        </div>
    )
}

export default PreviousWork
