import React from "react";
import ProjectCard2 from "./Projectcard2";
import { useState } from "react";
import './projectshowstyle.css'
const ProjectShow=()=>{
    const [isVisible, setVisible] = useState(false);
    const handleScroll=()=>{
        if(window.scrollY>=640){
            setVisible(true);
        }else{
            setVisible(false);
        }
    }
    window.addEventListener("scroll",handleScroll);
    return(
            <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
                <ProjectCard2/>
            </div>
    );
}
export default ProjectShow;