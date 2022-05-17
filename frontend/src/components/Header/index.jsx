import "../../styles/Header.css"

export default function Header(props) {
    return (
        <header>
            <div class="container">
                <nav>
                    <div id="logo-container">
                        <a id="logo" href="./home.html">
                            <img src="../public/images/Logo_YourHair.png" alt="Logo do Your Hair" id="logo"/>
                        </a>
                    </div>

                    <ul id="nav-list">
                        <div class="menu-icons close">
                            <ion-icon name="close"></ion-icon>
                        </div>

                        <li>
                            <ion-icon name="person-outline"></ion-icon>
                            <a href="./perfil_usuario.html" class="nav-link">Seu Perfil</a>
                        </li>

                        <li>
                            <ion-icon name="cut-outline"></ion-icon>
                            <a href="./profile_Cabeleireiro.html" class="nav-link">Cabeleireiros</a>
                        </li>

                        <li>
                            <ion-icon name="settings-outline"></ion-icon>
                            <a href="./home.html" class="nav-link">Configurações</a>
                        </li>
                    </ul>

                    <div class="menu-icons open">
                        <ion-icon name="menu"></ion-icon>
                    </div>
                </nav>
            </div>

            <section>
                <div class="container">
                    <div class="search-container">
                        <form class="search-bar">
                            <div class="input-container">
                                <input type="search" placeholder="O que deseja encontrar?" />
                                <button type="submit">
                                <ion-icon name="search"></ion-icon>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </header>

    );
}