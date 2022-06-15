import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CreatePublication from "./pages/CreatePublication";
import Home from "./pages/Home";
import ProfileCabelereiro from "./pages/ProfileCabelereiro";
import ProfileUser from "./pages/ProfileUser";
import Register from "./pages/Register";
import Schedule from "./pages/Schedule";
import Scheduling from "./pages/Scheduling";

import Agendado from "./pages/Agendado";
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

            <Route exact path="/formPublication/new" element={<CreatePublication title={"Cadastra Produto"}/>}/>
            <Route path="/formPublication/:id" element={<CreatePublication title={"Editar Produto"}/>}/>
            <Route exact path="/publication/:id" element={<Publication/>}/>
            
            <Route path="/scheduling/:id" element={<Scheduling/>}/>
            <Route path="/schedule" element={<Schedule/>}/>
            <Route path="/agendado/:id" element={Agendado}/>

          </Routes>
        </Router>
    </>
  );
}

export default App;
