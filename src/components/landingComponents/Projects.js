import React, { useState } from 'react';
import imagen from '../../images/background-masthead-1.jpg'
import imagen2 from '../../images/row-image-1.jpg'
import imagen3 from '../../images/row-image-2.jpg'
import imagen4 from '../../images/row-image-3.jpg'
import '../cssComponents/projects.css'
import { Link } from 'react-router-dom';

const Project = () => {


  return (
    <div className="projects-section bg-light" id="projects">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={imagen} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>¿Quienes somos?</h4>
              <p className="text-black-50 mb-0">
                Somos apasioandos de la montaña, buscando transmitir nuestra
                pasion y amor por este . Llegando asi a todos los que quieran
                adentrarse en el mundo de la montaña, con la seguridad y apoyo
                necesario, para realizar una experiencia de aprendizaje!
            </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={imagen2} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Taleres y salidas</h4>
                  <p className="mb-0 text-white-50">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quis molestiae labore natus sapiente tempore ipsam adipisci
                    rerum, minus ducimus eaque voluptatem dolore provident
                    nostrum, aliquam autem placeat eius culpa beatae.
                    
                  </p>
                  
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                  <Link to="/talleres">Ver más</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={imagen3} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Expediciones y Logística</h4>
                  <p className="mb-0 text-white-50">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam dolorum officiis voluptates. Rerum minima iusto
                    obcaecati voluptatibus ratione debitis animi corporis qui
                    nostrum vero? Ab cumque eaque voluptates aspernatur
                    voluptate.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                  <Link to="/expediciones">Ver más</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={imagen4} alt="" />
          </div>

          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                            
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Nuestros lugares</h4>
                  <p className="mb-0 text-white-50">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quis molestiae labore natus sapiente tempore ipsam adipisci
                    rerum, minus ducimus eaque voluptatem dolore provident
                    nostrum, aliquam autem placeat eius culpa beatae.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                  <Link to="/lugares" >Ver mas</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;