import React, { useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { deleteBookingServer, addBookingServer, updateBookingServer, selectBookingById } from '../../BookingsSlice';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "../../styles/Publication.css"

export default function Agendado() {

    let { id } = useParams();
    id = parseInt(id);

    const bookingFound = useSelector(state => selectBookingById(state, id))
    
    const [newBooking, setNewBooking] = useState(id ? bookingFound ?? {} : {});

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

    function editBooking(e){
        e.preventDefault();
        if(actionType === 'scheduling/updateBooking'){
            dispatch(updateBookingServer(newBooking));
            alert("Reserva atualizada com sucesso!")
        }

        navigate("/schedule");
    }

    // *-------------------

    const booking = useSelector(state => selectBookingById(state, id));
    const status = useSelector(state=>state.bookings.status);
    const error = useSelector(state=>state.bookings.error);

    if (status === 'loading'){
        return (<p>Carregando o agendamento...</p>);
    }else if (status === 'failed'){
        return(<p>Error: {error}</p>);
    }

    function handleDelete(e){
        e.preventDefault();
        dispatch(deleteBookingServer(id));
        alert("Agendamento excluido com sucesso!");
        navigate("/schedule")
    }

    function cancelButton(e){
        e.preventDefault();
        navigate("/schedule")
    }

    return (
        <>
        <Header/>

            <div className="column-left">
                <img id="image-publi" src={booking.images} width="40%" height="40%"  alt=""/>
            </div>

            <div className="column-right">

                    <label for="data" className="form-content">Data:</label>
                    <input type="date" name="date" value={newBooking.date} onChange={handleInputChange} required/>

                    <label for="cabelereiro" className="form-content">Horário:</label>
                    <input type="time" name="time"  value={newBooking.time} onChange={handleInputChange} required/>

                    <label className="form-content">Forma de Pagemento:</label>
                    <select  name="pay" value={newBooking.pay} onChange={handleInputChange} required>
                        <option>Escolher...</option>
                        <option>Dinheiro</option>
                        <option>Débito</option>
                        <option>Crédito</option>
                    </select>

                    <label className="form-content">Local:</label>
                    <select name="location" value={newBooking.location} onChange={handleInputChange} required>
                        <option>Escolher...</option>
                        <option>Casa</option>
                        <option>Salão</option>
                    </select>

                <button type="submit" id="submit" onClick={(e)=>cancelButton(e)} >Cancelar</button>
                <button type="submit" id="submit" onClick={(e)=>editBooking(e)}>Editar</button>
                <button type="submit" id="submit" onClick={handleDelete}>Excluir Agendamento</button>
            </div>

        <Footer/>
        </>
    );
}