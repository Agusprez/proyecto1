import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Aca van a estar declaradas las rutas para acceder desde el Landing-Variantes para mas detalle sobre ellas */}
      <Navbar></Navbar>
      <Landing></Landing>
      <Footer></Footer>
    </>
  )
}

export default App;
