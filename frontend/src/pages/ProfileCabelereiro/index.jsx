import Header from "../../components/Header"
import Card from "../../components/Card"
import Footer from "../../components/Footer"

import "../../styles/ProfileCabelereiro.css"

export default function ProfileCabelereiro() {
    return (
        <main>
            <Header/>
            <header className="user-profile-container">
                <div className="user-profile">
                    <div className="user-pp-wrapper">
                        <img
                            src="./placeholder_cabeleireiro.jpg"
                            alt="Foto de perfil do cabelereiro"
                        />
                    </div>

                    <h2 className="user-name">Nome do cabeleireiro</h2>
                    <h2 className="user-name">Nome do cabelereiro</h2>

                    <p className="user-description">
                        Breve descrição do cabeleireiro e de seu trabalho
                        Breve descrição do cabelereiro e de seu trabalho
                    </p>

                    <button className="edit profile" type="button">
                        Editar perfil
                    </button>
                    <div className="user-stats">
                        <dl className="stat">
                            <dt>Nota</dt>
                            <dd>4.8</dd>
                        </dl>
                        <dl className="stat">
                            <dt>Fãs</dt>
                            <dd>674</dd>
                        </dl>
                        <dl className="stat">
                            <dt>Seguidores</dt>
                            <dd>580</dd>
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
                    <Card image="./exemplo1.jpeg" preco="R$ 30,00"/>
                    <Card image="./exemplo2.jpeg" preco="R$ 50,00"/>
                    <Card image="./exemplo3.jpeg" preco="R$ 100,00"/>
                    <Card image="./exemplo4.jpeg" preco="R$ 46,00"/>
                    <Card image="./exemplo1.jpeg" preco="R$ 30,00"/>
                    <Card image="./exemplo2.jpeg" preco="R$ 50,00"/>
                    <Card image="./exemplo3.jpeg" preco="R$ 100,00"/>
                    <Card image="./exemplo4.jpeg" preco="R$ 46,00"/>
                </div>
            </section>
            <Footer/>
        </main>
    )
}




