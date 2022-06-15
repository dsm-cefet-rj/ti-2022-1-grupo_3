import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteBookingServer, fetchBookings, selectBookingById, updateBookingServer } from "../../BookingsSlice";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Agendado(props) {

    const navigate = useNavigate();
    let { id } = useParams();
    id = parseInt(id);
    
    const bookings = useSelector((state) => selectBookingById(state, id));
    const status = useSelector((state)=>state.bookings.status)
    const error = useSelector((state)=>state.bookings.error)
    const dispatch = useDispatch();

    if (status === 'loading'){
        return (<p>Carregando o Agendamento...</p>)
    }else if (status === 'failed'){
        return(<p>Error: {error}</p>)
    }

    function handleDelete(e) {
        e.preventDefault();
        dispatch(deleteBookingServer(id));
        alert("Agendamento excluida!");
        navigate("/schedule");
    }

    return (
        <>
        <Header/>

        <div className="column-50">
            <img src={bookings.images} width="40%" height="40%"  alt=""/>
        </div>

            <div className="button-container">
                <button type="submit" id="submit" onClick={handleDelete}>Cancelar</button>
                <button type="submit" id="submit">Publicar</button>
            </div>

        <Footer/>
        </>
    );
}