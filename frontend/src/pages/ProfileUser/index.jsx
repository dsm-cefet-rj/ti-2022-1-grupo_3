import Header from "../../components/Header"
import Card from "../../components/Card"
import Footer from "../../components/Footer"

import "../../styles/ProfileUser.css"

export default function ProfileUser() {
    return(
        <main>
        <Header/>
        <header class="user-profile-container">
            <div class="user-profile">
                <div class="user-pp-wrapper">
                    <img
                        src="./exemplo1.jpeg"
                        alt="Foto de perfil"
                    />
                </div>

                <h2 class="user-name">Nome</h2>

                <p class="user-description">
                    Breve descrição do Usuario Breve descrição do Usuario
                </p>

                <button class="edit profile" type="button">
                    Editar perfil
                </button>
                
            </div>
        </header>
        <section>
            <div>
                <ul class="profile-tabs">
                    <a class="selected" href="#">
                        <li>Meus cortes</li>
                    </a>
                    <a href="especialidade_cabelereiro.html">
                        <li>Minhas especialidades</li>
                    </a>
                </ul>
            </div>
            <div id="feed-container">
                <Card image="./exemplo1.jpeg" preco="R$ 30,00"/>
                <Card image="./exemplo1.jpeg" preco="R$ 30,00"/>
            </div>

            <br/>
            <nav>
                <ul>
                    <a href="#"><li>Suas Avaliações</li></a>
                    <a href="#"><li>Ultimos Locais</li></a>
                </ul>
            </nav>
        </section>
        <Footer/>
    </main>
    )
}
