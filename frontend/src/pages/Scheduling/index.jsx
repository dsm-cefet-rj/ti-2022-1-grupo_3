import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Footer from "../../components/Footer"
import Header from "../../components/Header"

import "../../styles/Schenduling.css"

export default function Schenduling(props) {

    const [newBooking, setNewBooking] = useState({
        "id": props.bookings.length,
    });

    let navigate = useNavigate();

    function handleInputChange(e){
        setNewBooking({...newBooking, [e.target.name]: e.target.value})
    }

    function createBooking(e){
        e.preventDefault();
        props.setBookings(props.bookings.concat(newBooking));
        alert("Publicação Criada com sucesso!");
        navigate("/cabeleireiro/schedule");
    }

    return (
        <>
        <Header/>
            <div className="main-container">
                <form action="#" id="form-container">
                    <legend>Marque o seu corte!!!</legend>

                    <label for="data" className="form-content">Data:</label>
                    <input type="date" name="date" className="form-content" value={newBooking.date} onChange={handleInputChange} required/>

                    <label for="cabelereiro" className="form-content">Horário:</label>
                    <input type="time" name="time" className="form-content" value={newBooking.time} onChange={handleInputChange} required/>

                    <label className="form-content">Forma de Pagemento:</label>
                    <select className="form-content" name="pay" value={newBooking.pay} onChange={handleInputChange} required>
                        <option>Escolher...</option>
                        <option>Dinheiro</option>
                        <option>Débito</option>
                        <option>Crédito</option>
                    </select>

                    <label className="form-content">Local:</label>
                    <select className="form-content" name="location" value={newBooking.location} onChange={handleInputChange} required>
                        <option>Escolher...</option>
                        <option>Casa</option>
                        <option>Salão</option>
                    </select>

                    <button type="submit" id="submit" onClick={(e)=>createBooking(e)}>Marcar</button>
                </form>
            </div>
        <Footer/>
        </>
    );
}