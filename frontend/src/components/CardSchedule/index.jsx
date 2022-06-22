import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { selectProductsById } from '../../reducers/ProductsSlice'
import { selectSellersById } from '../../reducers/SellerSlice'

import "../../styles/CardSchendule.css";

export default function CardSchendule({booking}) {

    const product = useSelector((state)=>selectProductsById(state,booking.idProduct))
    const seller = useSelector((state)=>selectSellersById(state,product.idSeller))

    return(
        <>
            <div className="main-cardschendule">
                <div className="container-cardschendule">
                    <div className="left-cardschendule">
                        <p> <span><b>Título: </b>{product.name}</span> </p>
                        <p> <span><b>R$ </b>{product.price}</span></p>
                        <p> <span><b>Forma Pagamento: </b> {booking.pay} </span></p>
                        <p> <span><b>Local: </b> {booking.location}</span> </p>
                        <p> <span><b>Data: </b> {booking.date}</span></p>
                        <p> <scan><b>Hora: </b> {booking.time}</scan></p>
                        <p> <scan><b>Cabeleireiro:</b> {seller.name}</scan></p>
                    </div>

                    <div className="right-cardschendule">
                        <img className="image-cardschendule" src={product.images} width="40" height="40"  alt=""/>
                        <Link to={`/editSchedule/${booking.id}`}><p>Editar Agendamento</p></Link> 
                    </div>

                </div>
            </div>
        </>
    );
}