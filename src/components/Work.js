import './workcardstyle.css';
import WorkCard from './WorkCard';
import ProjectCardData from './WorkCardData';
const Work=()=>{
    return (
        <div className='work-container'>
            <div className='project-heading'>
                <div className='project-container'>
                    {ProjectCardData.map((element,index)=>(<WorkCard imgsrc={element.imgsrc} text={element.text} title={element.title} code_link={element.code_link} key={index}/>))}
                </div>
            </div>
        </div>
    );
}
export default Work