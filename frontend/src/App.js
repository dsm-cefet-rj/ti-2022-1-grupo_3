import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CreatePublication from "./pages/CreatePublication";
import EspecialidadeCabelereiro from "./pages/EspecialidadeCabelereiro";
import Home from "./pages/Home";
import ProfileCabelereiro from "./pages/ProfileCabelereiro";
import ProfileUser from "./pages/ProfileUser";
import Register from "./pages/Register";
import Schedule from "./pages/Schedule";

import exemplo1 from "./images/exemplo1.jpeg"
import exemplo2 from "./images/exemplo2.jpeg"
import exemplo3 from "./images/exemplo3.jpeg"
import exemplo4 from "./images/exemplo4.jpeg"

function App() {
  const[products, setProducts] = useState(
    [
      {
        id: 0,
        images: [exemplo1],
        name: "Cabelo Loiro",
        price: 30.00,
        seller: "Cabeleireiro Top",
      },
      {
        id: 1,
        images: [exemplo2],
        name: "Cabelo Curto",
        price: 45.00,
        seller: "Cabeleireiro Legal",
      },
      {
        id: 2,
        images: [exemplo3],
        name: "Cabelo Cacheado",
        price: 37.50,
        seller: "Cabeleireiro Trem",
      },
      {
        id: 3,
        images: [exemplo4],
        name: "Cabelo Curto Liso",
        price: 100.00,
        seller: "Cabeleireiro Cansei",
      },
      {
        id: 4,
        images: [exemplo1],
        name: "Cabelo Loiro dnv",
        price: 666.00,
        seller: "Cabeleireiro AAAAaaaa",
      },
    ]
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home products={products}/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/me" element={<ProfileUser products={products}/>}/>
        <Route path="/me/newPublication" element={<CreatePublication products={products} setProducts={setProducts}/>}/>
        <Route path="/me/schedule" element={<Schedule/>}/>
        <Route path="/cabeleireiro" element={<ProfileCabelereiro products={products}/>}/>
        <Route path="/cabeleireiro/especialidade" element={<EspecialidadeCabelereiro products={products}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
