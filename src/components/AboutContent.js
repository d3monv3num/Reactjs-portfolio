import { Link } from 'react-router-dom';
import './aboutcontentstyle.css';
import React from 'react';
import React1 from '../assets/react1.jpg';
import React2 from '../assets/Computer_programmer.jpeg.jpg';

const AboutContent=()=>{
    return(
        <div className='about'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>I am a College Student, in 4<sup>th</sup> year pursuing Information Technology at UIET , Chandigarh Panjab University. Motivated to work in Software Developement and Data Analytics</p>
                <Link to="/contact">
                    <button className='btn'> Contact</button>
                </Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top1'>
                        <img src={React1} className='img1' alt='true'></img>
                    </div>
                    <div className='img-stack bottom'>
                        <img src={React2} className='img1' alt='true'></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutContent;