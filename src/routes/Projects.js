import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';
import WorkShow from '../components/WorkShow';
import Languageslider from '../components/LanguageSlider';
import Codingplatforms from '../components/Codingplatforms';
function Project(){
    return(
        <div>
            <Navbar/>
            <HeroImage2 heading="PROJECTS." text="Embarking on journey to code marvels" />
            <WorkShow/>
            <Codingplatforms/>
            <Languageslider/>
            <Footer/>
        </div>
    );
}
export default Project;