import { Link } from "react-router-dom";
import './navbarstyle.css'
import {FaBars,FaTimes} from "react-icons/fa";
import { useState } from "react";
function Navbar(){
    const [Click,setClick]=useState(false);
    const [Color,setColor]=useState(false);
    const handleClick=()=>{setClick(!Click)};
    const changeColor=()=>{
        if(window.scrollY>=100){
            setColor(true);
        }else{
            setColor(false);
        }
    };
    window.addEventListener("scroll",changeColor);
    return(
        <div className={Color?"header header-bg":"header"}>
            <Link to='/'>
                <h1>CodeCanvas</h1></Link>
            <ul className={Click?"nav-menu active":"nav-menu"}>
                <li>
                    <Link to='/' onClick={handleClick}>Home</Link>
                </li>
                <li>
                    <Link to='/about' onClick={handleClick}>About</Link>
                </li>
                <li>
                    <Link to='/project' onClick={handleClick}>Projects </Link>
                </li>
                <li>
                    <Link to='/experience' onClick={handleClick}>Experience</Link>
                </li>
                <li>
                    <Link to='/contact' onClick={handleClick}>Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {Click?(<FaTimes size={20} style={{color:"white"}}/>):(<FaBars size={20} style={{color:"white"}}/>)}
            </div>
        </div>
    );
}
export default Navbar;