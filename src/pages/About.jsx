import GeneralBackground from '../components/GeneralBackground/GeneralBackground';

//import './About.css';
const About = () => {
    const sections = [<p>Mission</p>, <p>History</p>];
    return <GeneralBackground sections={sections} />;
  };
  
export default About;