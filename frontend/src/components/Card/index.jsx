import { Link } from "react-router-dom";

import "../../styles/Card.css"

export default function Card(props) {

    return (
        <article className="cards">

            <Link to="/"> {/* Colocar rota para uma página melhor! */}
            <img src={props.image} alt="Imagem da Publicação"/>
            </Link>

            <div className="card-container">
                <h6>Corte de Cabelo e Descrição</h6>

                <Link to="/cabeleireiro">
                    <a href="Profile_Cabelereiro.html"><p>Username do Perfil</p></a>
                </Link>

                <p>{props.preco}</p>

                <Link to="/me/schedule">
                    <button className="btn-salvar">Agendar</button>
                </Link>
            </div>
        </article>
    );
}