import React from 'react'
import { Link } from 'react-router-dom'

import "../../styles/CardSchendule.css"

export default function CardSchendule(props) {
    return(
        <>
         <Link to={`/agendado/${props.booking.id}`}>
            <div className="main-cardschendule">
                <div className="container-cardschendule">

                    <div className="left-cardschendule">
                        <p> <span><b>Cabeleireiro: </b>{props.booking.name}</span> </p>
                        <p> <span><b>R$ </b>{props.booking.price}</span></p>
                        <p> <span><b>Cabeleireiro: </b> {props.booking.seller} </span></p>
                        <p> <span><b>Local: </b> {props.booking.location}</span> </p>
                        <p> <span><b>Data: </b> {props.booking.date}</span></p>
                        <p> <scan><b>Hora: </b> {props.booking.time}</scan></p>
                    </div>

                    <div className="right-cardschendule">
                        <img className="image-cardschendule" src={props.booking.images} width="40" height="40"  alt=""/>
                    </div>

                </div>
            </div>
        </Link>
        </>
    );
}