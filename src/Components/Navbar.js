import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    const isConfirmed = window.confirm('Apakah Anda yakin ingin Logout?');
    if (isConfirmed) {
      return navigate('/');
    } else {
      return navigate('/dashboard');
    }
  };

  return (
    <>
      {!location.pathname.includes('login') &&
         (
          <nav
            id='nav'
            className='navbar navbar-expand-md'
            style={{ height: '60px', backgroundColor: '#C9DABF' }}
          >
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav w-100 d-flex justify-content-between p-2'>
                <li className='nav-item'>
                  <img
                    // src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/a-logo-design%7C-company-logo-template-7246ba946d6686a9a5b984a1e4380b1b_screen.jpg?ts=1665828706'
                    // alt='logo'
                    // width={50}
                    // height={50}
                  />
                </li>

                <li className='nav-item' onClick={handleLogout}>
                  <Link className='nav-link' to='/login' >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        )}
    </>
  );
}
export default NavBar;
