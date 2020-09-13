import React, { useState, useEffect } from 'react';
import "./cssComponents/navbar.css";
import brand from '../images/brand.png';
import { Link, animateScroll, scrollSpy, Events } from 'react-scroll';
import { Container } from 'react-bootstrap';
import { useLocation, Link as LinkRoute } from 'react-router-dom'

const Navbar = () => {

  const [backgroundNav, setBackgroundNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    Events.scrollEvent.register('begin', function (to, element) {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log('end', arguments);
    });

    scrollSpy.update();
  }, []);

  useEffect(() => {
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    }
  }, []);

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

          <LinkRoute className={backgroundNav ? "noStyle" : "style"} to="/">
            <img src={backgroundNav ? brand : ""} alt="" />
          </LinkRoute>


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
                <LinkRoute className={backgroundNav ? "noStyle" : "style"} to="/">
                  Nosotros
                </LinkRoute>
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
                <LinkRoute className={backgroundNav ? "noStyle" : "style"} to="/">
                  Proyectos
                </LinkRoute>
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
                <LinkRoute className={backgroundNav ? "noStyle" : "style"} to="/">
                  Contacto
                  </LinkRoute>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  )
};

export default Navbar;