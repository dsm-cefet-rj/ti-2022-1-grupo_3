import { IoClose, IoPersonOutline, IoCutOutline, IoSettingsOutline, IoMenu, IoSearch } from "react-icons/io5";
import "../../styles/Header.css"

export default function Header(props) {
    return (
        <header>
            <div class="container">
                <nav>
                    <div id="logo-container">
                        <a id="logo" href="./home.html">
                            <img src="./Logo_YourHair.png" alt="Logo do Your Hair" id="logo"/>
                        </a>
                    </div>

                    <ul id="nav-list">
                        <div class="menu-icons close">
                            <IoClose name="close" class="icon"/>
                        </div>

                        <li>
                            <IoPersonOutline class="icon"/>
                            <a href="./perfil_usuario.html" class="nav-link">Seu Perfil</a>
                        </li>

                        <li>
                            <IoCutOutline class="icon"/>
                            <a href="./profile_Cabeleireiro.html" class="nav-link">Cabeleireiros</a>
                        </li>

                        <li>
                            <IoSettingsOutline class="icon"/>
                            <a href="./home.html" class="nav-link">Configurações</a>
                        </li>
                    </ul>

                    <div class="menu-icons open">
                        <IoMenu name="open" class="icon"/>
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
                                    <IoSearch name="menu" class="icon"/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </header>

    );
}