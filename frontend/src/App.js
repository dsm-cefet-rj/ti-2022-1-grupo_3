import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GuestRoute as G, UserRoute as P } from './routes/AuthRoutes';

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
import Login from "./pages/Login";
import UserRegister from "./pages/UserRegister";
import Cabeleireiros from "./pages/Cabeleireiros";

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/registerCabeleireiro" element={<P><RegisterCabeleireiro/></P>}/>
            <Route path="/editCabeleireiro/:id" element={<P><EditCabeleireiro/></P>}/>

            <Route path="/me" element={<P><ProfileUser/></P>}/>
            <Route path="/cabeleireiro/:id" element={<P><ProfileCabelereiro/></P>}/>
            <Route path="/cabeleireiros" element={<P><Cabeleireiros/></P>}/>

            <Route path="/" exact element={<P><Home/></P>}/>
            <Route path="/newPublication" element={<P><CreatePublication/></P>}/>
            <Route exact path="/EditPublication/:id" element={<P><EditPublication/></P>}/>
            
            <Route path="/scheduling/:id" element={<P><Scheduling/></P>}/>
            <Route path="/schedule" element={<P><Schedule/></P>}/>
            <Route path="/editSchedule/:id" element={<P><EditSchedule/></P>}/>

            <Route path="/login" element={<Login/>}/>
            <Route path="/userRegister" element={<UserRegister/>}/>
          </Routes>
        </Router>
    </>
  );
}

export default App;
