import React, { useState } from 'react';
import imagen from '../../images/background-masthead-1.jpg'
import imagen2 from '../../images/row-image-1.jpg'
import imagen3 from '../../images/row-image-2.jpg'
import imagen4 from '../../images/row-image-3.jpg'
import '../cssComponents/projects.css'

const Project = () => {


  return (
    <div class="projects-section bg-light" id="projects">
      <div class="container">
        <div class="row align-items-center no-gutters mb-4 mb-lg-5">
          <div class="col-xl-8 col-lg-7">
            <img class="img-fluid mb-3 mb-lg-0" src={imagen} alt="" />
          </div>
          <div class="col-xl-4 col-lg-5">
            <div class="featured-text text-center text-lg-left">
              <h4>¿Quienes somos?</h4>
              <p class="text-black-50 mb-0">
                Somos apasioandos de la montaña, buscando transmitir nuestra
                pasion y amor por este . Llegando asi a todos los que quieran
                adentrarse en el mundo de la montaña, con la seguridad y apoyo
                necesario, para realizar una experiencia de aprendizaje!
            </p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div class="col-lg-6">
            <img class="img-fluid" src={imagen2} alt="" />
          </div>
          <div class="col-lg-6">
            <div class="bg-black text-center h-100 project">
              <div class="d-flex h-100">
                <div class="project-text w-100 my-auto text-center text-lg-left">
                  <h4 class="text-white">Salidas</h4>
                  <p class="mb-0 text-white-50">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quis molestiae labore natus sapiente tempore ipsam adipisci
                    rerum, minus ducimus eaque voluptatem dolore provident
                    nostrum, aliquam autem placeat eius culpa beatae.
                </p>
                  <hr class="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center no-gutters">
          <div class="col-lg-6">
            <img class="img-fluid" src={imagen3} alt="" />
          </div>
          <div class="col-lg-6 order-lg-first">
            <div class="bg-black text-center h-100 project">
              <div class="d-flex h-100">
                <div class="project-text w-100 my-auto text-center text-lg-right">
                  <h4 class="text-white">Expediciones y Logística</h4>
                  <p class="mb-0 text-white-50">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam dolorum officiis voluptates. Rerum minima iusto
                    obcaecati voluptatibus ratione debitis animi corporis qui
                    nostrum vero? Ab cumque eaque voluptates aspernatur
                    voluptate.
                </p>
                  <hr class="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div class="col-lg-6">
            <img class="img-fluid" src={imagen4} alt="" />
          </div>
          <div class="col-lg-6">
            <div class="bg-black text-center h-100 project">
              <div class="d-flex h-100">
                <div class="project-text w-100 my-auto text-center text-lg-left">
                  <h4 class="text-white">Nuestros lugares</h4>
                  <p class="mb-0 text-white-50">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quis molestiae labore natus sapiente tempore ipsam adipisci
                    rerum, minus ducimus eaque voluptatem dolore provident
                    nostrum, aliquam autem placeat eius culpa beatae.
                </p>
                  <hr class="d-none d-lg-block mb-0 ml-0" />
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