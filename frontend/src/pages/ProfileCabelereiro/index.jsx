import React from "react"
import { useState } from "react"

import Header from "../../components/Header"
import Card from "../../components/Card"
import Footer from "../../components/Footer"

import "../../styles/ProfileCabelereiro.css"

export default function ProfileCabelereiro(props) {

    let [follower, setFollower] = useState(0);
    let [follow, setFollow] = useState("Seguir");

    function handleFollow(){
        if(follow === "Seguindo"){
            return(setFollower(follower - 1), setFollow("Seguir"));
        } else {
            return(setFollower(follower + 1), setFollow("Seguindo"));
        }
    }

    const renderProdcuct = (product) => {
        return (
          <React.Fragment>
            {product.status !== "Agendado" && (
              <Card product={product} key={product.name} />
            )}
          </React.Fragment>
        );
    };

    return (
        <main>
            <Header/>
            <header className="user-profile-container">
                <div className="user-profile">
                    <div className="user-pp-wrapper">
                        <img
                            src="../images/placeholder_cabeleireiro.jpg"
                            alt="Foto de perfil do cabelereiro"
                        />
                    </div>

                    <h2 className="user-name">Nome do cabeleireiro</h2>

                    <p className="user-description">
                        Breve descrição do cabeleireiro e de seu trabalho
                    </p>

                    <button className="edit profile" type="button" onClick={handleFollow}>
                        {`${follow}`}
                    </button>

                    <div className="user-stats">
                        <dl className="stat">
                            <dt>Nota</dt>
                            <dd>4.8</dd>
                        </dl>
                        <dl className="stat">
                            <dt>Seguindo</dt>
                            <dd>674</dd>
                        </dl>
                        <dl className="stat">
                            <dt>Seguidores</dt>
                            <p>{follower}</p>
                        </dl>
                    </div>
                </div>
            </header>
            <section>
                <div>
                    <ul className="profile-tabs">
                        <a className="selected" href="#">
                            <li>Meus cortes</li>
                        </a>
                        <a href="especialidade_cabelereiro.html">
                            <li>Minhas especialidades</li>
                        </a>
                    </ul>
                </div>

                <div id="feed-container">
                    {props.products.map(renderProdcuct)}
                </div>

            </section>
            <Footer/>
        </main>
    )
}




