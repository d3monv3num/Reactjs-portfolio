import React from "react";
import Work from './Work';
import { useState } from "react";
import './projectshowstyle.css'
const WorkShow=()=>{
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
            <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
                <Work/>
            </div>
    );
}
export default WorkShow;