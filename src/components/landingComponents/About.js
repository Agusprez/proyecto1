import React from 'react';
import "../cssComponents/about.css"

const About = () => {
  return (
    <section class="about-section text-center" id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2 class="text-white mb-4">Irûtrekk - Actividades de montaña</h2>
            <p class="text-white-50">
              Aca puede ir un textito lindo sobre lo que se siente hacer
              montaña, o como se diga. no tengo mucha idea sobre eso, pero
              bueno, queria que veas que puede ir algun textito como decoracion.
            </p>
          </div>
        </div>
        <img class="img-fluid" src="assets/img/ipad.png" alt="" />
      </div>
    </section>
  )
}

export default About;