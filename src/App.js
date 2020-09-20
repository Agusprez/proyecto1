import React from "react";
import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TallerSalidas from "./components/routes/TallerSalidas";
import Expediciones from "./components/routes/Expediciones";
import NuestrosLugares from "./components/routes/NuestrosLugares";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Landing} />
        <Route path="/talleres" exact component={TallerSalidas} />
        <Route path="/expediciones" exact component={Expediciones} />
        <Route path="/lugares" exact component={NuestrosLugares} />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
