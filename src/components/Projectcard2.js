import { Link } from 'react-router-dom';
import './projectcardstyle2.css'

const ProjectCard2=()=>{
    return(
        <div className='pricing'>
            {/* <center><h2><p>ACADEMICS</p></h2></center> */}
            <div className='pricing-heading'>ACADEMICS</div>
            <div className='card-container'>
                <div className='card'>
                    <h3>- B.E. -</h3>
                    <span className='bar'></span>
                    <p className='btc'>UIET</p>
                    <p> Panjab University </p>
                    <p> Information Technology </p>
                    <p> 2020 - 2024</p>
                    <p> CGPA: 8.51 </p>
                    <Link to='https://uiet.puchd.ac.in/' className='btn btn1'>OFFICAL SITE</Link>
                </div>
                <div className='card'>
                    <h3>- Senior Secondary -</h3>
                    <span className='bar'></span>
                    <p className='btc'>SGGS</p>
                    <p> Chandigarh </p>
                    <p> Non-medical </p>
                    <p> 2018-2020 </p>
                    <p> Score: 92.4% </p>
                    <Link to='http://www.sggsschool.co.in/' className='btn btn1'>OFFICAL SITE</Link>
                </div>
                <div className='card'>
                    <h3>- Junior Secondary -</h3>
                    <span className='bar'></span>
                    <p className='btc'>KV 3BRD</p>
                    <p> Chandigarh </p>
                    <p> CBSE </p>
                    <p> 2014-2018 </p>
                    <p> Score: 93% </p>
                    <Link to='https://chandigarh3brd.kvs.ac.in/' className='btn btn1'>OFFICAL SITE</Link>
                </div>
            </div>
        </div>
    );
}
export default ProjectCard2;