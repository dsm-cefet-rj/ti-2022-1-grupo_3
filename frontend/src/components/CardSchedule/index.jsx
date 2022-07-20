import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { selectProductsById } from '../../reducers/ProductsSlice'

import "../../styles/CardSchedule.css";

export default function CardSchedule({booking, ...rest}) {
    const product = useSelector(state => selectProductsById(state, booking.idProduct))

    return(
        <div className="main-cardSchedule" {...rest}>
            <div className="container-cardSchedule">
                <div className="left-cardSchedule">
                    <p><span><b>Título: </b>{product.name}</span></p>
                    <p><span><b>R$ </b>{product.price}</span></p>
                    <p><span><b>Forma Pagamento: </b> {booking.pay}</span></p>
                    <p><span><b>Local: </b> {booking.location}</span></p>
                    <p><span><b>Data: </b> {booking.date}</span></p>
                    <p><span><b>Hora: </b> {booking.time}</span></p>
                </div>

                <div className="right-cardSchedule">
                    <div className="user-pp-wrapper">
                        <img className="image-cardSchedule" src={product.images} width="40" height="40"  alt=""/>
                    </div>
                    <Link to={`/editSchedule/${booking.id}`}><p>Editar Agendamento</p></Link>
                </div>
            </div>
        </div>
    );
}