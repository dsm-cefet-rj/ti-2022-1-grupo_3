import React from 'react';
import { Link } from "react-router-dom";

import "../../styles/Card.css"

export default function Card(props) {
    return (
        <>
            <article className="cards">
                
                <Link to="/"> {/* Colocar rota para uma página melhor! */}
                    <img src={props.product.images} alt="Imagem da Publicação" id={props.product.id}/>
                </Link>

                <div className="card-container">
                    <h6>{props.product.name}</h6>

                    <Link to="/cabeleireiro">
                        <p>{props.product.seller}</p>
                    </Link>

                    <p>R$ {props.product.price}</p>

                    <Link to={`/scheduling/${props.product.id}`}>
                        <button className="btn-salvar">Agendar</button>
                    </Link>
                </div>
            </article>
        </>
    );
}