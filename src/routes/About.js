import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';
import AboutContent from '../components/AboutContent';
import ProjectShow from '../components/ProjectShow';
function About(){
    return(
        <div>
            <Navbar/>
            <HeroImage2 heading='ABOUT' text='Web artisan, crafting digital experiences'/>
            <AboutContent/>
            <ProjectShow/>
            <Footer/>
        </div>
    );
}
export default About;