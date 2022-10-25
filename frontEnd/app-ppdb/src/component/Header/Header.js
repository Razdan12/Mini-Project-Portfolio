import React from "react";
import {Link} from "react-router-dom"
import "./style.css"

const Header = () => {
  return (
    <div>
      <header id="header" className="Header fixed-top  header-transparent ">
        <div className="container d-flex align-items-center justify-content-between">

          <div className="logo">
            <h1><Link to="/">My-PPDB</Link></h1>

        {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */} 
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li></li>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#features">Tentang</a></li>
              <li><a className="nav-link scrollto" href="#faq">F.A.Q</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
              {/* <Link className="getstarted scrollto" to="/form">Login</Link> */}
              <li><Link className="getstarted scrollto" to="/login" >Login</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>
    </div>
  );
};

export default Header;
