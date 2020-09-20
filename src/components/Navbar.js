import React, { useState, useEffect } from 'react';
import "./cssComponents/navbar.css";
import brand from '../images/brand.png';
import { Link, animateScroll } from 'react-scroll';
import { Container } from 'react-bootstrap';
import { useLocation, Link as LinkRoute } from 'react-router-dom'

const Navbar = () => {

  const [backgroundNav, setBackgroundNav] = useState(false);
  const location = useLocation();
  const ruta = location.pathname;

  useEffect(() => {
    console.log(location.pathname)
    //instancio la funcion para que en las rutas distintas a /, la barra ya este en blanco 
    changeBackground();
    //
    cambioDeRuta();
  }, [ruta]);

  const cambioDeRuta = () => {
    console.log('Se monta de nuevo el componente por el cambio de ruta');
    animateScroll.scrollToTop({ duration: 350, smooth: false });
  }

  //Cambia el background de la navbar cuando el scroll en Y es superior a 50
  const changeBackground = () => {
    if (ruta !== "/" || window.scrollY >= 50) {
      setBackgroundNav(true)
    } else {
      setBackgroundNav(false)
    }
  }
  //Llama a la funcion cuando se produce el scroll en la pagina
  window.addEventListener('scroll', changeBackground)

  if (ruta === "/") {
    return (
      <nav
        id="mainNav"
        className="navbar bg-color navbar-expand-lg navbar-light fixed-top"
        style={backgroundNav ? { backgroundColor: "white" } : { backgroundColor: "transparent" }}>
        <Container>
          {/* Icono de la pagina */}
          <div
            className="navbar-brand"
            onClick={() => { animateScroll.scrollToTop() }}>
            <LinkRoute
              className={backgroundNav ? "noStyle" : "style"}
              to="/">
              <img
                src={backgroundNav ? brand : ""}
                alt=""
              />
            </LinkRoute>
          </div>
          <div
            className="collapse navbar-collapse"
            id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              {/* Nosotros */}
              <li className="nav-item">
                <Link
                  className={backgroundNav ? "nav-link default" : "nav-link"}
                  activeClass="active"
                  spy={true}
                  to="about"
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
                  duration={1000} >
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
  } else {
    return (
      <nav
        id="mainNav"
        className="navbar bg-color navbar-expand-lg navbar-light fixed-top"
        style={backgroundNav ? { backgroundColor: "white" } : { backgroundColor: "transparent" }}>
        <Container>
          {/* Icono de la pagina */}
          <div
            className="navbar-brand"
            onClick={() => { animateScroll.scrollToTop() }}>
            <LinkRoute
              className={backgroundNav ? "noStyle" : "style"}
              to="/">
              <img
                src={brand}
                alt=""
              />
            </LinkRoute>
          </div>
        </Container>
      </nav>
    )
  }
};

export default Navbar;