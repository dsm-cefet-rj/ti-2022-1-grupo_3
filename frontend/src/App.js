import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CreatePublication from "./pages/CreatePublication";
import Home from "./pages/Home";
import ProfileCabelereiro from "./pages/ProfileCabelereiro";
import ProfileUser from "./pages/ProfileUser";
import Register from "./pages/Register";
import Schedule from "./pages/Schedule";
import Scheduling from "./pages/Scheduling";
import EditSchedule from "./pages/EditSchedule";
import Publication from './pages/Publication';

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/me" element={<ProfileUser/>}/>
            <Route path="/cabeleireiro" element={<ProfileCabelereiro/>}/>

            <Route path="/formPublication/new" element={<CreatePublication/>}/>
            <Route path="/formPublication/:id" element={<CreatePublication/>}/>
            <Route exact path="/publication/:id" element={<Publication/>}/>
            
            <Route path="/scheduling/:id" element={<Scheduling/>}/>
            <Route path="/schedule" element={<Schedule/>}/>
            <Route path="/editSchedule/:id" element={<EditSchedule/>}/>

          </Routes>
        </Router>
    </>
  );
}

export default App;
