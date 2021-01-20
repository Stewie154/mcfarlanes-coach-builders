import React, {useState} from 'react'
import './Styles/PreviousWork.scss';
import { FaTimesCircle } from 'react-icons/fa';
import { prevWorkData } from './PreviousWorkData';
const PreviousWork = () => {

    

    const [jobs, setJobs] = useState(prevWorkData);

    const toggleBigPic = (index) => {

        setJobs(prevState => (
            prevState.map( (job) => {
                return index === job.id ? {...job, showingEnlarged: !job.showingEnlarged } : job
            }
        )
        ));
        
    }

    return (
        <div className="wrapper" id="previous-work">
            <div className="title-info">
                <h1>Previous Work</h1>
                <p>Feel free to take a look at some of Stephen's previous work below.</p>
            </div>
            <div className="prev-work-container">
                {jobs.map((job, index) => {
                    return (
                        <div className="job" key={index}>
                        <img src={job.src} alt="Classic Car" className="small-pic" onClick={() => toggleBigPic(index)}/>
                        <h2>{job.title}</h2>
                        <p>{job.desc}</p>
                        <FaTimesCircle className={ job.showingEnlarged ? "display-icon" : "hide" } onClick={() => toggleBigPic(index)}/>
                        <img src={job.src} alt="Classic Car" className={ job.showingEnlarged ? "display-big-pic" : "hide" }/>
                        </div>
                    )
                } )}
            </div>
        </div>
    )
}

export default PreviousWork
