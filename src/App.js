import React from "react";
import "./App.css";
/* import "./styleTemplate.css"; */
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Landing></Landing>
      <Footer></Footer>
    </>
  )
}

export default App;
