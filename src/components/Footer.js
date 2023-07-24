import './footerstyle.css';
import React from 'react';
import {FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone} from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si';
import { Link } from 'react-router-dom';
const Footer=()=>{
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{color:'white',marginRight:'2rem'}}/>
                        <div>
                            <p>UIET, Chandigarh</p>
                            <p>Panjab University</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{color:'white',marginRight:'2rem'}}/>
                        8360737399</h4>
                    </div>
                    <div className='mail'>
                        <h4><FaMailBulk size={20} style={{color:'white',marginRight:'2rem'}}/>
                        ue208065.namananand.it@gmail.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>Summary</h4>
                    <p>Motivated college student with a strong background in full stack web development, deep learning, and data structures and algorithms. Seeking opportunities to gain technical expertise to create and contribute to impactful projects.</p>
                    <div className='social'>
                        <Link to='https://leetcode.com/bayron_mode_forever/'><SiLeetcode size={30} style={{color:'white', marginRight:'1rem'}}/></Link>
                        <Link to="https://github.com/d3monv3num"><FaGithub size={30} style={{color:'white', marginRight:'1rem'}}/></Link>
                        <Link to="https://www.linkedin.com/in/naman-anand-12a608212/"><FaLinkedin size={30} style={{color:'white', marginRight:'1rem'}}/></Link> 
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Footer;