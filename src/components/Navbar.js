import React, { useState, useEffect } from 'react';
import "./cssComponents/navbar.css";
import brand from '../images/brand.png';
import { Link, animateScroll, scrollSpy } from 'react-scroll';
import { Container } from 'react-bootstrap';
import { useLocation, Link as LinkRoute } from 'react-router-dom'

const Navbar = () => {

  const [backgroundNav, setBackgroundNav] = useState(false);
  const location = useLocation();


  useEffect(() => {
    changeBackground();
  }, []);

  const changeBackground = () => {

    console.log(location.pathname)

    if ((location.pathname !== "/") || window.scrollY >= 50) {
      setBackgroundNav(true)
    } else {
      setBackgroundNav(false)
    }
  }
  window.addEventListener('scroll', changeBackground)

  return (
    <nav
      id="mainNav"
      className="navbar bg-color navbar-expand-lg navbar-light fixed-top"
      style={backgroundNav ? { backgroundColor: "white" } : { backgroundColor: "transparent" }}>
      <Container>
        <div
          className="navbar-brand"
          onClick={() => { animateScroll.scrollToTop() }}>
          <img src={backgroundNav ? brand : ""} alt="" />
        </div>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation">
          Menu
        <i className="fas fa-bars"></i>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            {/* Nosotros */}
            <li className="nav-item">
              <Link
                className={backgroundNav ? "nav-link default" : "nav-link"}
                activeClass="active"
                spy={true} to="about"
                smooth={true}
                duration={1000} >

                Nosotros
              </Link>
            </li>
            {/* Proyectos */}
            <li className="nav-item">
              <Link
                className={backgroundNav ? "nav-link default" : "nav-link"}
                activeClass="active"
                spy={true}
                to="projects"
                smooth={true}
                duration={1000}>
                Proyectos
              </Link>
            </li>
            {/* Contacto */}
            <li className="nav-item">
              <Link
                className={backgroundNav ? "nav-link default" : "nav-link"}
                activeClass="active"
                spy={true}
                to="signup"
                smooth={true}
                duration={1000}>

                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  )
};

export default Navbar;