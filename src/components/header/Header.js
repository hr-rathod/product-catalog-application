import React from 'react';
import './header.css';
import { Link, Outlet } from 'react-router-dom';

function Header() {
  return (
    <div className=''>
      <div className='navbar-container'>
        <div className='logo'>
          <h1>Product Catalog Application</h1>
        </div>
        <div className='nav-links'>
          <ul className='navbar' type='none'>
            <li className='nav-item'>
              <Link to={"/"} className='nav-link'>Product List</Link>
            </li>
            <li className='nav-item'>
              <Link to={"product-detail"} className='nav-link'>Product Detail</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='col-12'>
        <div className='d-flex justify-content-center   py-2'></div>
        <div className='d-flex    justify-content-center py-2'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Header;
