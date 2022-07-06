import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addBookingServer, updateBookingServer, selectBookingById } from '../../reducers/BookingsSlice';

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import "../../styles/Scheduling.css";

export default function Scheduling() {
    let { id } = useParams();

    const bookingFound = useSelector(state => selectBookingById(state, id))
    
    const [newBooking, setNewBooking] = useState(
        id ? bookingFound ?? {} : {}
    );

    const [actionType, ] = useState(
        id ?
            bookingFound
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
            newBooking.idProduct = id;
            dispatch(addBookingServer(newBooking));
            alert("Reserva criada com sucesso!");
        } else {
            dispatch(updateBookingServer(newBooking));
            alert("Reserva atualizada com sucesso!")
        }

        navigate("/schedule");
    }

    return (
        <>
        <Header/>
            <div className="main-container">
                <form action="#" id="form-container">
                    <legend>Marque o seu corte!!!</legend>

                    <label htmlFor="data" className="form-content">Data:</label>
                    <input type="date" name="date" className="form-content" value={newBooking.date} onChange={handleInputChange} required/>

                    <label htmlFor="cabelereiro" className="form-content">Horário:</label>
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
    )
}