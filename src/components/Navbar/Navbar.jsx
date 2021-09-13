import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isCurrentPage = (path) => {
    return location.pathname === path;
  };

  return (
    <div id='navbar'>
      <div className='navbarLogoGroup'>
        <img src='/assets/logo.png' alt='' id='logo-image' />
        <text id='logo-text'>TreeHouse Academia</text>
      </div>

      <div className='navbarTextGroup'>
        <Link
          to='/home'
          className={isCurrentPage('/home') ? 'nav-link-active' : 'nav-link'}
        >
          Home
        </Link>
        <Link
          to='/about'
          className={isCurrentPage('/about') ? 'nav-link-active' : 'nav-link'}
        >
          About
        </Link>
        <Link
          to='/future'
          className={isCurrentPage('/future') ? 'nav-link-active' : 'nav-link'}
        >
          Future
        </Link>
        <Link
          to='/pastevents'
          className={isCurrentPage('/pastevents') ? 'nav-link-active' : 'nav-link'}
        >
          Past Events
        </Link>
        <Link
          to='/sponsors'
          className={
            isCurrentPage('/sponsors') ? 'nav-link-active' : 'nav-link'
          }
        >
          Sponsors
        </Link>
        <Link
          to='/contactUs'
          className={
            isCurrentPage('/contactUs') ? 'nav-link-active' : 'nav-link'
          }
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
