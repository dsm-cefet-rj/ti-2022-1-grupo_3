import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

import "../../styles/ProfileCabelereiro.css"
import hairstylistPicture from "../../images/placeholder_cabeleireiro.jpg";

export default function ProfileCabelereiro(props) {

    const [follower, setFollower] = useState(0);
    const [follow, setFollow] = useState("Seguir");

    function handleFollow(){
        if(follow === "Seguindo"){
            return(setFollower(follower - 1), setFollow("Seguir"));
        } else {
            return(setFollower(follower + 1), setFollow("Seguindo"));
        }
    }

    const products = useSelector(state => state.products)
    const renderProduct = (product) => {
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
                            src={hairstylistPicture}
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
                        <li>
                            <button type="button" className="selected">
                                Cortes anteriores
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                Especialidades
                            </button>
                        </li>
                    </ul>
                </div>

                <div id="feed-container">
                    {products.map(renderProduct)}
                </div>

            </section>
            <Footer/>
        </main>
    )
}




