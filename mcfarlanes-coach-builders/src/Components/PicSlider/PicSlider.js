import React from 'react'
import './Styles/_PicSlider.scss';
import { data } from './data';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


const PicSlider = () => {

    return (
        <div className="container">
            <FaArrowAltCircleLeft className="left-arrow" />
            <FaArrowAltCircleRight className="Right-arrow" />
            {data.map((pic) => {
                return(
                    <img width="10%" src={pic.src} alt="Car" className="image"/>
                )
            })}
        </div>
    )
}

export default PicSlider
