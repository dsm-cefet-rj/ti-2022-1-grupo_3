import Card from "../../components/Card"
import "../../styles/Home.css"

export default function Home() {
    return (
        <>
            <header>
                <a id="logo" href="Index.html">
                    <img src="./Logo_YourHair.png" alt="Logo do Your Hair" id="logo"/>
                </a>
            </header>
            <section>
                <div id="search-container">
                    <input type="search" placeholder="O que deseja encontrar?"/>
                </div>

                <nav>
                    <ul id="ul">
                        <li id="li">
                            <a href="perfil_usuario.html" class="nav-link">Veja seu Perfil</a>
                            <a href="perfil_Cabeleireiro.html" class="nav-link">Cabeleireiros</a>
                            <a href="home.html" class="nav-link">Configurações</a>
                        </li>

                        <li id="li">
                            <button>Seguidores</button>
                            <button>Seguindo</button>
                        </li>
                    </ul>
                </nav>

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
        </>
    )
}