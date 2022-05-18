import "../../styles/Card.css"

export default function Card(props) {

    return (
        <article className="cards">
            <img src={props.image} alt="Imagem da Publicação"/>

            <div className="card-container">
                <h6>Corte de Cabelo e Descrição</h6>
                <a href="Profile_Cabelereiro.html">
                    <p>Username do Perfil</p>
                </a>
                <p>{props.preco}</p>
                <button className="btn-salvar">Salvar</button>
            </div>
        </article>
    )
}