import React from 'react';
import { Link } from "react-router-dom";

import "../../styles/Card.css";

export default function Card({product, ...rest}) {
    return (
        <article className="cards" {...rest}> 
            <img src={product.images} alt="Imagem da Publicação" id={product.id}/>

            <div className="card-container">
                <h6>{product.name}</h6>

                <Link to="/cabeleireiro">
                    <p>{product.seller}</p>
                </Link>

                <p>R$ {product.price}</p>

                <Link to={`/scheduling/${product.id}`}>
                    <button className="btn-salvar">Agendar</button>
                </Link>

                <Link to={`/editPublication/${product.id}`}><p>Editar</p></Link>
            </div>
        </article>
    );
}