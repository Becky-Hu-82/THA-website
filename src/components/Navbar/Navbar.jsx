import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isCurrentPage = (path) => {
    return location.pathname === path;
  };

  return (
    <div id='navbar'>
      <img src="/assets/logo.png" alt="" id='logo-image'/>
      <text id='logo-text'>TreeHouse Academia</text>
      <Link
        to='/sponsors'
        className={isCurrentPage('/sponsors') ? 'nav-link-active' : 'nav-link'}
      >
        Sponsors
      </Link>
      <Link
        to='/future'
        className={isCurrentPage('/future') ? 'nav-link-active' : 'nav-link'}
      >
        Future
      </Link>
    </div>
  );
};

export default Navbar;
