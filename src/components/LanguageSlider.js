import React from 'react';
import {SiCplusplus,SiMongodb,SiJavascript,SiUnrealengine} from 'react-icons/si';
import './languagesliderstyle.css';
import {FaPython,FaNodeJs,FaReact,FaCss3Alt} from 'react-icons/fa'
const Languageslider=()=>{
    return(
        <div className='slider'>
            <center><h2>Languages & FrameWorks</h2></center>
            <div className='slide-track'>
                <div className='slide'>
                    <SiCplusplus className='reflect' size={100} style={{color:'white', marginRight:'1rem'}}/>
                </div>
                <div className='slide'>
                    <FaNodeJs className='reflect' size={100} style={{color:'white', marginRight:'1rem'}}/>
                </div>
                <div className='slide'>
                    <FaReact className='reflect' size={100} style={{color:'white', marginRight:'1rem'}}/>
                </div>
                <div className='slide'>
                    <SiJavascript className='reflect' size={100} style={{color:'white', marginRight:'1rem'}}/>
                </div>
                <div className='slide'>
                    <SiMongodb className='reflect' size={100} style={{color:'white', marginRight:'1rem'}}/>
                </div>
                <div className='slide'>
                    <FaCss3Alt className='reflect' size={100} style={{color:'white', marginRight:'1rem'}}/>
                </div>
                <div className='slide'>
                    <FaPython className='reflect' size={100} style={{color:'white', marginRight:'1rem'}}/>
                </div>
                <div className='slide'>
                    <SiUnrealengine className='reflect' size={100} style={{color:'white', marginRight:'1rem'}}/>
                </div>
            </div>
        </div>
    );
}
export default Languageslider;