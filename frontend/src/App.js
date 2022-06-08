import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CreatePublication from "./pages/CreatePublication";
import EspecialidadeCabelereiro from "./pages/EspecialidadeCabelereiro";
import Home from "./pages/Home";
import ProfileCabelereiro from "./pages/ProfileCabelereiro";
import ProfileUser from "./pages/ProfileUser";
import EditProfile from './pages/EditProfile';
import Register from "./pages/Register";
import Schedule from "./pages/Schedule";
import Scheduling from "./pages/Scheduling";

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/me" element={<ProfileUser/>}/>
            <Route path="/me/editProfile" element={<EditProfile/>}/>
            <Route path="/newPublication" element={<CreatePublication/>}/>
            <Route path="/scheduling/:id" element={<Scheduling/>}/>
            <Route path="/cabeleireiro" element={<ProfileCabelereiro/>}/>
            <Route path="/cabeleireiro/especialidade" element={<EspecialidadeCabelereiro/>}/>
            <Route path="/schedule" element={<Schedule/>}/>
          </Routes>
        </Router>
    </>
  );
}

export default App;
