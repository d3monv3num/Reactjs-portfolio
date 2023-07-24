import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import HeroImage3 from "../components/HeroImage3";
import Form from '../components/Form';
function Contact(){
    return(
        <div>
            <Navbar/>
            <HeroImage3 heading='Contact' text="let's have a chat"/>
            <Form/>
            <Footer/>
        </div>
    );
}
export default Contact;