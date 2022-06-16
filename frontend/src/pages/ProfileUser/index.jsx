import React from "react";
import { useSelector } from "react-redux";
import { selectAllProducts } from '../../reducers/ProductsSlice';

import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

import { Link } from "react-router-dom";

import "../../styles/ProfileUser.css";
import userPicture from "../../images/exemplo1.jpeg";

export default function ProfileUser(props) {

    const products = useSelector(selectAllProducts)
    const renderProduct = (product) => {
        return (
          <>
            {product.status !== "Agendado" && (
              <Card product={product} key={product.name} />
            )}
          </>
        );
    };

    return(
        <main>
        <Header/>
        
        <header className="user-profile-container">
            <div className="user-profile">
                <div className="user-pp-wrapper">
                    <img
                        src={userPicture}
                        alt="Foto de perfil"
                    />
                </div>

                <h2 className="user-name">Nome do cliente</h2>

                <p className="user-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <Link to={`./EditProfile`}>
                    <button className="btn-salvar">Editar Perfil</button>
                </Link>

                <div className="user-stats">
                    <dl className="stat">
                        <dt>Fotos</dt>
                        <dd>2</dd>
                    </dl>
                    <dl className="stat">
                        <dt>Seguidores</dt>
                        <dd>674</dd>
                    </dl>
                    <dl className="stat">
                        <dt>Seguindo</dt>
                        <dd>580</dd>
                    </dl>
                </div>
            </div>
        </header>
        
        <section>
            <ul className="profile-tabs">
                <li>
                    <button type="button" className="selected">
                        Meus cortes
                    </button>
                </li>
                <li>
                    <button type="button" href="especialidade_cabelereiro.html">
                        Cabeleireiro
                    </button>
                </li>
            </ul>
            <div id="feed-container">
                {products.map(renderProduct)}
            </div>

        </section>
        <Footer/>
    </main>
    )
}
