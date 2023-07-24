import React from 'react';
import './codingplatformstyle.css';
import { Link } from 'react-router-dom';
import {SiLeetcode,SiCodechef,SiGeeksforgeeks,SiGithub} from 'react-icons/si';
import {FaHackerrank} from 'react-icons/fa';
const Codingplatforms = () => {
  const customCSSVariable = '--i';
  const spanStyle1 = {
    [customCSSVariable]:0
  };
  const spanStyle2 = {
    [customCSSVariable]:1
  };
  const spanStyle3 = {
    [customCSSVariable]:2
  };
  const spanStyle4 = {
    [customCSSVariable]:3
  };
  return (
    <>
    <div className='cube-container'>
    <h2>Coding Platforms</h2>
    <div className='cube'>
        <div className='top'>
        <Link to='https://leetcode.com/bayron_mode_forever/'>
          <SiLeetcode size={120} style={{color:"white"}}/><p>LeetCode</p>
          </Link>
          </div>
        <div>
        <span style={spanStyle1}>
        <Link to='https://github.com/d3monv3num'>
        <SiGithub size={120} style={{color:"white"}}/><p>Github</p>
        </Link>
        </span>
        <span style={spanStyle2}>
        <Link to='https://www.codechef.com/users/i_luv_melons'>
        <SiCodechef size={120} style={{color:"white"}}/><p>Codechef</p>
        </Link>
        </span>
        <span style={spanStyle3}>
        <Link to='https://auth.geeksforgeeks.org/user/namananand891/practice'>
        <SiGeeksforgeeks size={120} style={{color:"white"}}/><p>Geeksforgeeks</p>
        </Link>
        </span>
        <span style={spanStyle4}>
        <Link to='https://www.hackerrank.com/namananand891?hr_r=1'>
        <FaHackerrank size={120} style={{color:"white"}}/><p>Hackerrank</p>
        </Link>
        </span>
        </div>
    </div>
    </div>
    </>
  )
}

export default Codingplatforms
