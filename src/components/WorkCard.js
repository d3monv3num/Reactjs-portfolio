import './workcardstyle.css';
import { NavLink } from 'react-router-dom';

const WorkCard = (props) => {
    return (
        <div className='project-card'>
            <img src={props.imgsrc} alt='work' />
            <h2 className='project-title'>{props.title}</h2>
            <div className='pro-details'>
                <p>{props.text}</p>
                <div className='pro-btns'>
                    <NavLink to="https://github.com/d3monv3num" className='btn btn1'>view</NavLink>
                    <NavLink to={props.code_link} className='btn btn1'>Source</NavLink>
                </div>
            </div>
        </div>
    );
}
export default WorkCard