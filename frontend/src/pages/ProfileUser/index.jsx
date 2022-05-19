import Header from "../../components/Header"
import Card from "../../components/Card"
import Footer from "../../components/Footer"

import "../../styles/ProfileUser.css"

export default function ProfileUser() {
    return(
        <main>
        <Header/>
        
        <header className="user-profile-container">
            <div className="user-profile">
                <div className="user-pp-wrapper">
                    <img
                        src="./exemplo1.jpeg"
                        alt="Foto de perfil"
                    />
                </div>

                <h2 className="user-name">Nome</h2>

                <p className="user-description">
                    Breve descrição do Usuario Breve descrição do Usuario
                </p>

                <button className="edit profile" type="button">
                    Editar perfil
                </button>

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
            <div id="post-options">
                <p>Meus Cortes</p>
                <p>Cabelereiro</p>
            </div>

            <div id="feed-container">
                <Card image="./exemplo1.jpeg" preco="R$ 30,00"/>
                <Card image="./exemplo1.jpeg" preco="R$ 30,00"/>
            </div>
        </section>
        <Footer/>
    </main>
    )
}
