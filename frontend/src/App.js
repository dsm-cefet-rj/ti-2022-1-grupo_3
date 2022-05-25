import { React, useState } from 'react';
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
        seller: "Cabeleireiro A",
      },
      {
        id: 1,
        images: [exemplo2],
        name: "Cabelo Curto",
        price: 45.00,
        seller: "Cabeleireiro B",
      },
      {
        id: 2,
        images: [exemplo3],
        name: "Cabelo Cacheado",
        price: 37.50,
        seller: "Cabeleireiro C",
      },
      {
        id: 3,
        images: [exemplo4],
        name: "Cabelo Curto Liso",
        price: 100.00,
        seller: "Cabeleireiro D",
      },
      {
        id: 4,
        images: [exemplo1],
        name: "Cabelo Comprido",
        price: 80.00,
        seller: "Cabeleireiro E",
      },
    ]
  );

  const [bookings, setBookings] = useState([
    {
      id: 0,
      images: [exemplo1],
      name: "Cabelo Loiro",
      price: 30.00,
      seller: "Cabeleireiro Top",
      date: "25/05/2022",
      time: "21:28",
      pay: "Dinheiro",
      location: "Casa",
    },
    {
      id: 1,
      images: [exemplo2],
      name: "Cabelo Curto",
      price: 45.00,
      seller: "Cabeleireiro Legal",
      date: "25/05/2022",
      time: "21:28",
      pay: "Dinheiro",
      location: "Casa",
    },
    {
      id: 2,
      images: [exemplo3],
      name: "Cabelo Cacheado",
      price: 37.50,
      seller: "Cabeleireiro Trem",
      date: "25/05/2022",
      time: "21:28",
      pay: "Dinheiro",
      location: "Casa",
    },
    {
      id: 3,
      images: [exemplo4],
      name: "Cabelo Curto Liso",
      price: 100.00,
      seller: "Cabeleireiro Cansei",
      date: "25/05/2022",
      time: "21:28",
      pay: "Dinheiro",
      location: "Casa",
    },
    {
      id: 4,
      images: [exemplo1],
      name: "Cabelo Loiro dnv",
      price: 666.00,
      seller: "Cabeleireiro AAAAaaaa",
      date: "25/05/2022",
      time: "21:28",
      pay: "Dinheiro",
      location: "Casa",
    },
  ])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home products={products}/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/me" element={<ProfileUser products={products}/>}/>
        <Route path="/me/editProfile" element={<EditProfile/>}/>
        <Route path="/newPublication" element={<CreatePublication products={products} setProducts={setProducts}/>}/>
        <Route path="/me/scheduling/:id" element={<Scheduling products={products} setProducts={setProducts} bookings={bookings} setBookings={setBookings}/>}/>
        <Route path="/cabeleireiro" element={<ProfileCabelereiro products={products}/>}/>
        <Route path="/cabeleireiro/especialidade" element={<EspecialidadeCabelereiro products={products}/>}/>
        <Route path="/cabeleireiro/schedule" element={<Schedule bookings={bookings} setBookings={setBookings}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
