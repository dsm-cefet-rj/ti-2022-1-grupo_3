import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { selectProductsById } from '../../reducers/ProductsSlice'
import { selectSellersById } from '../../reducers/SellersSlice'

import "../../styles/CardSchedule.css";

export default function CardSchedule({booking}) {
    const product = useSelector(state => selectProductsById(state, booking.idProduct))
    const seller = useSelector(state => selectSellersById(state, product.idSeller))

    return(
        <>
            <div className="main-cardSchedule">
                <div className="container-cardSchedule">
                    <div className="left-cardSchedule">
                        <p><span><b>Título: </b>{product.name}</span></p>
                        <p><span><b>R$ </b>{product.price}</span></p>
                        <p><span><b>Forma Pagamento: </b> {booking.pay}</span></p>
                        <p><span><b>Local: </b> {booking.location}</span></p>
                        <p><span><b>Data: </b> {booking.date}</span></p>
                        <p><span><b>Hora: </b> {booking.time}</span></p>
                        <p><span><b>Cabeleireiro:</b> {seller.name}</span></p>
                    </div>

                    <div className="right-cardSchedule">
                        <img className="image-cardSchedule" src={product.images} width="40" height="40"  alt=""/>
                        <Link to={`/editSchedule/${booking.id}`}><p>Editar Agendamento</p></Link> 
                    </div>

                </div>
            </div>
        </>
    );
}