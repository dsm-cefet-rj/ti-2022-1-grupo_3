import React from 'react'
import { Link } from 'react-router-dom'

export default function CardSchendule(props) {
    return(
        <>
        <div className="d-flex shadow p-3 mb-5 bg-white rounded bd-highlight justify-content-start">
            <h4>
                <img src={props.booking.images} width="40" height="40"  alt=""/>
                <Link to={"/"}> <span>{props.booking.name}</span> - R$ <span>{props.booking.price}</span></Link>             
		        &nbsp;
                <p style={{fontSize:15 +'px'}}>
                    <span><b>Cabeleireiro: </b></span>
                    <span>{props.booking.seller}</span> - <span>{props.booking.location}</span>
                </p>
                <p style={{fontSize:15+'px'}}>
                    <span><b>Data: </b></span>
                    <span>{props.booking.date}</span> - <span>
                        <b>Hora: </b></span><span>{props.booking.time}</span>
                </p>
            </h4>
        </div>
        </>
    );
}