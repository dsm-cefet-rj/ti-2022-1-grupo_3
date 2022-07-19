import React from 'react';
import { Link } from "react-router-dom";

import "../../styles/Card.css";

export default function CardCabeleireiro({sellers, ...rest}) {
    return(
        <article className="cards" {...rest}>
            {/* <img src={props.sellers.images} alt="Foto Cabeleireiro" id={props.sellers.id}/> */}

            <div className="card-container">
                <h6>{sellers.name}</h6>
                <h6>{sellers.email}</h6>
    
                <Link to={`/cabeleireiro/${sellers.id}`}>
                    <h6>{sellers.username}</h6>
                </Link>
            
            </div>
        </article>
    );
}