import React, {useState} from 'react'
import './Styles/_PicSlider.scss';
import { data } from './data';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


const PicSlider = () => {
    const [current, setCurrent] = useState(0);


    if(!Array.isArray(data) || data.length <= 0) {
        return null
    }

    const nextSlide = () => {
        setCurrent( current === data.length - 1 ? 0 : current + 1 )
    }
    const prevSlide = () => {
        setCurrent( current === 0 ? data.length - 1 : current -1 )
    }

    console.log(current)

    return (
        <div className="container">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {data.map((pic, index) => {
                return(
                    <div className={index === current ? "slide active" : "slide"} key={index} >
                        {index === current && (
                            <img src={pic.src} alt="Car" className="image"/>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default PicSlider
