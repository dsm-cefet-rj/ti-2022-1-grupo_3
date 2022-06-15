import React from 'react'
import { Link } from 'react-router-dom'

import "../../styles/CardSchendule.css"

export default function CardSchendule(props) {
    return(
        <>
            <div className="main-cardschendule">
                <div className="container-cardschendule">
                    <div className="left-cardschendule">
                        <p> <span><b>Título: </b>{props.booking.name}</span> </p>
                        <p> <span><b>R$ </b>{props.booking.price}</span></p>
                        <p> <span><b>Forma Pagamento: </b> {props.booking.pay} </span></p>
                        <p> <span><b>Local: </b> {props.booking.location}</span> </p>
                        <p> <span><b>Data: </b> {props.booking.date}</span></p>
                        <p> <scan><b>Hora: </b> {props.booking.time}</scan></p>
                    </div>

                    <div className="right-cardschendule">
                        <img className="image-cardschendule" src={props.booking.images} width="40" height="40"  alt=""/>
                        <Link to={`/editSchedule/${props.booking.id}`}><p>Editar Agendamento</p></Link> 
                    </div>

                </div>
            </div>
        </>
    );
}