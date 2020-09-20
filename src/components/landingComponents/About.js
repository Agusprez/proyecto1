import React from 'react';
import "../cssComponents/about.css";

const About = () => {
  return (
    <section className="about-section text-center" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">Irûtrekk - Actividades de montaña</h2>
            <p className="text-white-50">
              Aca puede ir un textito lindo sobre lo que se siente hacer
              montaña, o como se diga. no tengo mucha idea sobre eso, pero
              bueno, queria que veas que puede ir algun textito como decoracion.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;