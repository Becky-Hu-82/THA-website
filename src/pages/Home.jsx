import GeneralBackground from '../components/GeneralBackground/GeneralBackground';
import './Home.css';
import img from './Img/WePage.jpg';
const Home = () => {
  //const sections = [<p>we</p>];
  //return <GeneralBackground sections={sections} />;
  return (
    <div id='home'>
      <img src={img} id='homeImage' />
    </div>
  );
};

export default Home;
