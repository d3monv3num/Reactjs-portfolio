import './projectcardstyle2.css'
import SkillCardContent from './SkillCardContent';
import SkillCardData from './SkillCardData';
import './skillcardstyle.css';

const SkillCard=()=>{
    return(
        <div className='pricing'>
            {/* <center><h2><p>ACADEMICS</p></h2></center> */}
            <div className='pricing-heading'>SKILLS</div>
            <div className='card-container'>
                {SkillCardData.map((element,index)=>(<SkillCardContent title={element.title} content={element.sub_skill} key={index}/>))}
            </div>
        </div>
    );
}
export default SkillCard;