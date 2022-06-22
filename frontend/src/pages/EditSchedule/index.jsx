import React, { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { deleteBookingServer, updateBookingServer, selectBookingById } from '../../reducers/BookingsSlice';
import { selectProductsById } from "../../reducers/ProductsSlice";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "../../styles/EditSchedule.css";

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

    const booking = useSelector(state => selectBookingById(state, id));
    var product = useSelector(state=>selectProductsById(state, booking.idProduct))
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

            <div className="main-container" id="form-container">
                <legend>Editar Agendamento</legend>
                <br></br>
            </div>

            <div className="container-editschedule">

                <div className="column-right">
                    <img id="image-publi" src={product.images} alt="Imagem da publicação"/>
                </div>

                <div className="column-left">

                    <table className="table-editschedule">
                        <tr>
                            <td><p><b>Data: </b></p></td>
                            <td><p><span>{booking.date}</span></p></td>
                            <td><input type="date" name="date" value={newBooking.date} onChange={handleInputChange} required/></td>
                        </tr>

                        <tr>
                            <td><p><b>Horário: </b></p></td>
                            <td><p><span>{booking.time}</span></p></td>
                            <td><input type="time" name="time"  value={newBooking.time} onChange={handleInputChange} required/></td>
                        </tr>

                        <tr>
                            <td><p><b>Pagamento: </b></p></td>
                            <td><p><span>{booking.pay}</span></p></td>
                            <td>
                                <select  name="pay" value={newBooking.pay} onChange={handleInputChange} required>
                                    <option>Escolher...</option>
                                    <option>Dinheiro</option>
                                    <option>Débito</option>
                                    <option>Crédito</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td><p><b>Local: </b></p></td>
                            <td><p><span>{booking.location}</span></p></td>
                            <td>
                                <select name="location" value={newBooking.location} onChange={handleInputChange} required>
                                    <option>Escolher...</option>
                                    <option>Casa</option>
                                    <option>Salão</option>
                                </select>
                            </td>
                        </tr>
                    </table>

                    <div className="buttom-cardschedule">
                        <button type="submit" id="submit" onClick={(e)=>cancelButton(e)} >Cancelar</button>
                        <button type="submit" id="submit" onClick={(e)=>editBooking(e)}>Editar</button>
                        <button type="submit" id="submit" onClick={handleDelete}>Excluir</button>
                    </div>
                </div>
            </div>

        <Footer/>
        </>
    );
}