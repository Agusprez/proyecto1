import React from 'react';
import { Container } from 'react-bootstrap';
import '../components/cssComponents/footer.css';

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer bg-black small text-center text-white-50">
      <Container>Copyright {year} © Perez Agustin Gabriel - WebDev</Container>
    </footer>
  )
}

export default Footer;
