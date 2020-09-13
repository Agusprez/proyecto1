import React from 'react';
import '../cssComponents/signup.css';

const SignUp = () => {
  return (
    <section id="signup" class="contact-section signup-section bg-black">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <h4 class="text-uppercase m-0">Contacto</h4>
                <hr class="my-4" />
                <div class="small text-black-50">Marcos</div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fas fa-envelope text-primary mb-2"></i>
                <h4 class="text-uppercase m-0">Email</h4>
                <hr class="my-4" />
                <div class="small text-black-50">
                  <a href="#!">irutrekk@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <h4 class="text-uppercase m-0">Contacto</h4>
                <hr class="my-4" />
                <div class="small text-black-50">Sofia</div>
              </div>
            </div>
          </div>
        </div>
        <div class="social d-flex justify-content-center">
          <a class="mx-2" href="https://www.facebook.com/irutrekk/" target="_blanck"><i class="fab fa-facebook-f"></i></a>
          <a class="mx-2" href="https://wa.me/543329546303" target="_blanck"><i class="fab fa-whatsapp"></i></a>
          <a class="mx-2" href="https://www.instagram.com/irutrekk" target="_blanck"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </section>

  )
}

export default SignUp;