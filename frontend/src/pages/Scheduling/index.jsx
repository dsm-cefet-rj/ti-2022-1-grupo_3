import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { addBooking, updateBooking } from '../../BookingsSlice';

import Footer from "../../components/Footer"
import Header from "../../components/Header"

import "../../styles/Schenduling.css"

export default function Schenduling() {

    const bookings = useSelector(state => state.bookings)

    let { id } = useParams();
    id = parseInt(id);
    
    const [newBooking, setNewBooking] = useState(
        id ? bookings.filter((booking) => booking.id === id)[0] ?? {} : {}
    );

    const [actionType, ] = useState(
        id ?
            bookings.filter((booking) => booking.id === id)[0]
            ? 'scheduling/updateBooking'
            : 'scheduling/addBooking'
            : 'scheduling/addBooking'
    );
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleInputChange(e){
        setNewBooking({...newBooking, [e.target.name]: e.target.value})
    }

    function createBooking(e){
        e.preventDefault();
        if(actionType === 'scheduling/addBooking'){
            dispatch(addBooking(newBooking));
        } else {
            dispatch(updateBooking(newBooking));
        }

        alert("Reserva feita com sucesso!");
        navigate("/schedule");
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