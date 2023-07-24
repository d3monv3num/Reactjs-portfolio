import Timeline from "./Timeline";
import TimelineData from "./TimelineData";

const TimelineShow=()=>{
    return(
        <>
        <center><h2>Work Experience</h2></center>
        <div className='timeline'>
        {TimelineData.map((element,index)=>(<Timeline title={element.title} summary={element.summary} time_duration={element.time_duration} key={index} num={index}/>))}
        </div>
        </>
    );
}
export default TimelineShow;