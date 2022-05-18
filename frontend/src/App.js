import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CreatePublication from "./pages/CreatePublication";
import EspecialidadeCabelereiro from "./pages/EspecialidadeCabelereiro";
import Home from "./pages/Home";
import ProfileCabelereiro from "./pages/ProfileCabelereiro";
import ProfileUser from "./pages/ProfileUser";
import Register from "./pages/Register";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/me" element={<ProfileUser/>}/>
        <Route path="/me/newPublicarion" element={<CreatePublication/>}/>
        <Route path="/me/schedule" element={<Schedule/>}/>
        <Route path="/cabeleireiro" element={<ProfileCabelereiro/>}/>
        <Route path="/cabeleireiro/especialidade" element={<EspecialidadeCabelereiro/>}/>
      </Routes>
    </Router>
  );
}

export default App;
