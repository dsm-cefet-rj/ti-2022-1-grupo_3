import React from 'react';
import { Link } from "react-router-dom";

import "../../styles/Card.css";

export default function CardCabeleireiro(props) {
    return(
        <>
            <article className="cards">
                {/* <img src={props.sellers.images} alt="Foto Cabeleireiro" id={props.sellers.id}/> */}

                <div className="card-container">
                    <h6>{props.sellers.name}</h6>
                    <h6>{props.sellers.email}</h6>
        
                    <Link to={`/cabeleireiro/${props.sellers.id}`}>
                        <h6>{props.sellers.username}</h6>
                    </Link>
                
                </div>
            </article>
        </>
    );
}