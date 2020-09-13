import React from 'react';
import Header from './landingComponents/Header'
import About from './landingComponents/About';
import Project from './landingComponents/Projects';
import SignUp from './landingComponents/SignUp';

const Landing = () => {
  return (
    <>
      <Header></Header>
      <About></About>
      <Project></Project>
      <SignUp></SignUp>
    </>
  )
};

export default Landing;
