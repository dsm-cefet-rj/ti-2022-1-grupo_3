import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CreatePublication from "./pages/CreatePublication";
import Home from "./pages/Home";
import ProfileCabelereiro from "./pages/ProfileCabelereiro";
import ProfileUser from "./pages/ProfileUser";
import RegisterCabeleireiro from "./pages/RegisterCabeleireiro";
import EditCabeleireiro from "./pages/EditCabeleireiro";
import Schedule from "./pages/Schedule";
import Scheduling from "./pages/Scheduling";
import EditSchedule from "./pages/EditSchedule";
import EditPublication from './pages/EditPublication';

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/registerCabeleireiro" element={<RegisterCabeleireiro/>}/>
            <Route path="/editCabeleireiro/:id" element={<EditCabeleireiro/>}/>

            <Route path="/me" element={<ProfileUser/>}/>
            <Route path="/cabeleireiro" element={<ProfileCabelereiro/>}/>

            <Route path="/" exact element={<Home/>}/>
            <Route path="/newPublication" element={<CreatePublication/>}/>
            <Route exact path="/EditPublication/:id" element={<EditPublication/>}/>
            
            <Route path="/scheduling/:id" element={<Scheduling/>}/>
            <Route path="/schedule" element={<Schedule/>}/>
            <Route path="/editSchedule/:id" element={<EditSchedule/>}/>

          </Routes>
        </Router>
    </>
  );
}

export default App;
