import GeneralBackground from '../components/GeneralBackground/GeneralBackground';

import Suiyi from './Img/test.jpg'


import './About.css';

function Avatar(props) {
  const nameStyle = {
    fontFamily:'poppins',
    fontStyle:'mixed',
    fontWeight:'bold',
    fontSize:"20",
    color:'#4E6735'
  }
  const occupationStyle = {
    fontFamily:'poppins',
    fontStyle:'mixed',
    fontSize:"20",
    color:'#4E6735'
  }
  return <div>
    <div>
      <img alt="NA" src={props.img} width="175" height="199"/>
    </div>
    <div>
      <text style={nameStyle}>{props.name}</text>
    </div>
    <div>
      <text style={occupationStyle}>{props.occupation}</text>
    </div>
  </div>;
}

const About = () => {
  const section1 = (
    <div id='mission'>
      <h1 id='title'>About</h1>
      <h2 className='aboutSubtitle'>Mission</h2>
      <p className='aboutText'>
        The TreeHouse Academia (THA) was founded in the summer of 2018 by a
        group of philanthropic driven young professionals. The THA team share a
        common belief that young learners around the globe should have equal
        access to education without the barriers of wealth and social classes.
        The THA thrives to nourish the education dreams of underprivileged
        teenagers by constructing a platform for Chinese international students
        around the globe to donate funds, purchase educational accessories, and
        gain social hands-on experience by visiting schools and students in
        rural China to ensure equal education for all.
      </p>
    </div>
  );

  const section2 = (
    <div id='history'>
      <h2 className='aboutSubtitle'>History</h2>
      <p className='aboutText'>
        After the THA was founded in the summer of 2018, our whole team
        dedicated ourselves to the preparation of a fund-donating trip to a
        school named Escuela Uvita de Osa in the city of Puntarenas, located in
        the beautiful and diverse nation of Costa Rica. The THA spent over 6
        month planning for this vital trip for our club, and we spent 2 weeks
        closely collaborating with the local school to facilitate the
        transaction of funds to the education department in charge of Escuela
        Uvita de Osa. In the summer of 2021, with the pandemic finally coming to
        an end, the THA General Managers proposed a restart plan to continue
        this philphrothic journey with a new group of beneficiaries—students in
        rural China, and every pieces of imagination the THA have in mind are
        being turned into reality by all our dedicated staffs.{' '}
      </p>
    </div>
  );
  
  //添加图片先import，然后加到imgarr里边，最后才能在Avatar函数里边用
  const section3 = (
    <div id='members'>
      <h1 id='title'>Meet Our Team</h1>
      
      <h2 className= 'aboutMemberTitle'>General Manager</h2>
      <div className='aboutMemberAvatars'>
        <div className='aboutIndividualAvatar'><Avatar img={Suiyi} name="Suiyi" occupation="president"/></div>
      </div>
      
      <h2 className= 'aboutMemberTitle'>Financial Team</h2>
      <div className='aboutMemberAvatars'>
        <div className='aboutIndividualAvatar'><Avatar img={Suiyi} name="Suiyi" occupation="president"/></div>
        <div className='aboutIndividualAvatar'><Avatar img={Suiyi} name="Suiyi" occupation="president"/></div>
        <div className='aboutIndividualAvatar'><Avatar img={Suiyi} name="Suiyi" occupation="president"/></div>
      </div>
      
      <h2 className= 'aboutMemberTitle'>Techinical Team</h2>
      <div className='aboutMemberAvatars'>
        <div className='aboutIndividualAvatar'><Avatar img={Suiyi} name="Suiyi" occupation="president"/></div>
        <div className='aboutIndividualAvatar'><Avatar img={Suiyi} name="Suiyi" occupation="president"/></div>
        <div className='aboutIndividualAvatar'><Avatar img={Suiyi} name="Suiyi" occupation="president"/></div>
        <div className='aboutIndividualAvatar'><Avatar img={Suiyi} name="Suiyi" occupation="president"/></div>
        <div className='aboutIndividualAvatar'><Avatar img={Suiyi} name="Suiyi" occupation="president"/></div>
        <div className='aboutIndividualAvatar'><Avatar img={Suiyi} name="Suiyi" occupation="president"/></div>
      </div>
      
      <h2 className= 'aboutMemberTitle'>Design Team</h2>
      <div className='aboutMemberAvatars'>
        <div className='aboutIndividualAvatar'><Avatar img={Suiyi} name="Suiyi" occupation="president"/></div>
        <div className='aboutIndividualAvatar'><Avatar img={Suiyi} name="Suiyi" occupation="president"/></div>
        <div className='aboutIndividualAvatar'><Avatar img={Suiyi} name="Suiyi" occupation="president"/></div>
      </div>
    </div>
  );

  const sections = [section1, section2, section3];
  return <GeneralBackground sections={sections} />;
};
export default About;
