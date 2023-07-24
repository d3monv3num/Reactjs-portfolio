import React from 'react'
import TimelineShow from '../components/TimelineShow';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';
import SkillCard from '../components/SkillCard';
const Experience = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 text="Knowledge Operationalized" heading="Experience"/>
      <TimelineShow/>
      <SkillCard/>
      <Footer/>
    </div>
  )
}

export default Experience;
