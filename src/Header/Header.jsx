import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ShopNow.png';
import './Header.css';
import { useLogin } from '../LoginProvider';

function Header() {
  const [showCategory, setShowCategory] = useState(false);
  const [showHam, setHam] = useState(false);
  const [showHamCategory, setShowHamCategory] = useState(false);

  const toggleCategories = () => setShowCategory((prev) => !prev);
  const toggleHamburger = () => setHam((prev) => !prev);
  const toggleHamCategories = () => setShowHamCategory((prev) => !prev);

  const {logout, isLoggedin} = useLogin()

  const handleLogin = () => {
    logout()
  }

  return (
    <div className="header-div">
      <header className="header-container">
        <Link to="/">
          <img src={logo} alt="ShopNow Logo" className="logo" />
        </Link>
        <nav className="nav">
          <ul className="navlinks">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/allproducts">All Products</Link></li>
            <li onMouseEnter={toggleCategories} onMouseLeave={toggleCategories}>
              <Link className="nav-link" to="#">Categories</Link>
              <i className={`bi bi-chevron-down chev-down ${showCategory ? 'rotated' : ''}`}></i>
            </li>
          </ul>
          {showCategory && (
            <div className="categories" onMouseEnter={toggleCategories} onMouseLeave={toggleCategories}>
              <ul className="categoriesUL">
                <li><Link to="/electronics">Electronics</Link></li>
                <li><Link to="/clothing-men">Mens's Clothing</Link></li>
                <li><Link to="/clothing-women">Women's Clothing</Link></li>
                <li><Link to="/jewelery">Jewelery</Link></li>
              </ul>
            </div>
          )}
        </nav>
        <div className="searchbox-container">
          <input className="Searchbox" type="text" placeholder="Search for Products" />
          <button className="btn-search"><i className="fas fa-search"></i></button>
        </div>
        <div className="left-icons">
          <button className="btn-user"><i className="bi bi-person"></i></button>
          <button className="btn-cart"><i className="bi bi-cart3"></i></button>
          {isLoggedin && (<button className='btn-logout' onClick={handleLogin}>Logout <i className="bi bi-box-arrow-right"></i></button>)}

          <button className="btn-ham" onClick={toggleHamburger}><i className="bi bi-list"></i></button>
        </div>
        {showHam && (
          <div className="offcanvas">
            <button className="btn-close-ham" onClick={toggleHamburger}><i className="bi bi-x-lg"></i></button>
            <ul className="navlinks-ham">
              <li><Link className="nav-link" to="/">Home</Link></li>
              <li><Link className="nav-link" to="/allproducts">All Products</Link></li>
              <li>
                <button className="nav-link" onClick={toggleHamCategories}>
                  Categories
                </button>
              </li>
            </ul>
            {showHamCategory && (
              <div className="ham-category">
                <button className="btn-back-ham" onClick={toggleHamCategories}>
                  <i className="bi bi-chevron-left"></i>
                </button>
                <ul className="categoriesUL-ham">
                  <li><Link to="/electronics">Electronics</Link></li>
                  <li><Link to="/clothing">Clothing</Link></li>
                </ul>
              </div>
            )}
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
