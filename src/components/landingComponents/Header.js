import React from 'react';
import '../cssComponents/masthead.css';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="masthead">
      <Container className="d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">Irutrekk</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            Nacemos de las ganas de compartir aquello que nos apasiona.
          </h2>
        </div>
      </Container>
    </header>
  );
};
export default Header;