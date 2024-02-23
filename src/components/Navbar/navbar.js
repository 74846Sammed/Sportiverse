import React from 'react';
import { Link } from 'react-router-dom';
import Iconheart from '../../assets/images/heart.png';
import Iconcart from '../../assets/images/cart.png';
import Iconuser from '../../assets/images/account.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{fontStyle:'italic'}}>SPORTYVERSE</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto ">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/categories/cricket">Cricket</Link></li>
                <li><Link className="dropdown-item" to="/categories/football">Football</Link></li>
                <li><Link className="dropdown-item" to="/categories/badminton">Badminton</Link></li>
                <li><Link className="dropdown-item" to="/categories/volleyball">Volleyball</Link></li>
                <li><Link className="dropdown-item" to="/categories/basketball">Basketball</Link></li>
                <li><Link className="dropdown-item" to="/categories/hockey">Hockey</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events">Events</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/wishlist">
                <img src={Iconheart} alt="Wishlist" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <img src={Iconcart} alt="Cart" />
              </Link>
            </li>
            <li className="nav-item dropdown">
              <div className="dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="accountDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={Iconuser} alt="Account" />
                </Link>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="accountDropdown"style={{ minWidth: '40px' }}>
                  <li><Link className="dropdown-item" to="/admin">Admin</Link></li>
                  <li><Link className="dropdown-item" to="/loginform">User</Link></li>
                  <li><Link className="dropdown-item" to="/loginform">Coach</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
