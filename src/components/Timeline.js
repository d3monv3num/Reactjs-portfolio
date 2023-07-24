import './timelinestyle.css'
import React, { useState } from 'react'
import Whitedot from '../assets/png-transparent-white-neon-circle-thumbnail.png';

const Timeline=(props)=>{
    const [isVisible, setVisible] = useState(false);
    const handleScroll=()=>{
        if(window.scrollY>=50){
            setVisible(true);
        }else{
            setVisible(false);
        }
    }
    window.addEventListener("scroll",handleScroll);
    return(
            <div className={`container-box ${isVisible?"animation-class":""} ${props.num%2!==0?"left-container":"right-container"}`} >
                
                <img src={Whitedot} alt='true'></img>
                <div className='text-box'>
                    <h2>{props.title}</h2>
                    <small>{props.time_duration}</small>
                    <p>{props.summary}</p>
                    <span className={(props.num%2)!==0?"left-container-arrow":"right-container-arrow"}></span>
                </div>
            </div>
    );
}
export default Timeline;