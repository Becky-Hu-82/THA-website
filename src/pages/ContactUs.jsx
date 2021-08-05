import { useState } from 'react';
import GeneralBackground from '../components/GeneralBackground/GeneralBackground';
import './ContactUs.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const section1 = (
    <div>
      <h2>Contact us</h2>
      <div className='contactContainer'>
        <div className='contactUsRow1'>
          <div className='inputGroup'>
            <label for='nameInput'>Name</label>
            <input
              className='shortInput'
              id='nameInput'
              name='nameInput'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='inputGroup'>
            <label for='phoneInput'>Phone</label>
            <input
              className='shortInput'
              id='phoneInput'
              name='phoneInput'
              type='text'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className='contactUsRow2'>
          <div className='inputGroup' id='emailInputGroup'>
            <label for='emailInput'>Email</label>
            <input
              className='longInput'
              id='emailInput'
              name='emailInput'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className='contactUsRow3'>
          <div className='inputGroup' id='msgInputGroup'>
            <label for='msgInput'>Message</label>
            <textarea
              className='paragraphInput'
              id='msgInput'
              name='msgInput'
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const sections = [section1];

  return <GeneralBackground sections={sections} />;
};

export default ContactUs;
