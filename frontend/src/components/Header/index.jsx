import { useState } from "react";
import { IoClose, IoPersonOutline, IoCutOutline, IoSettingsOutline, IoMenu, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

import "../../styles/Header.css";

export default function Header(props) {
  const [isNavActive, setNavActive] = useState(false);

  return (
    <header>
      <div class="container">
        <nav>
          <div id="logo-container">
            <Link to="/">
              <a id="logo"><img src="./Logo_YourHair.png" alt="Logo do Your Hair" id="logo"/></a>
            </Link>
          </div>

          <div id="main-container" className={isNavActive && "active"}>
            <div class="search-container">
              <form class="search-bar">
                <div class="input-container">
                  <input type="search" placeholder="O que deseja encontrar?" />
                  <button type="submit">
                    <IoSearch name="menu" class="icon" />
                  </button>
                </div>
              </form>
            </div>

            <ul id="nav-list">
              <div class="menu-icons close" onClick={() => setNavActive(false)}>
                <IoClose class="icon" />
              </div>

              <li>
                <Link to="/me">
                  <IoPersonOutline class="icon" />
                  <a class="nav-link">Seu Perfil</a>
                </Link>
              </li>

              <li>
                <Link to="/cabeleireiro">
                  <IoCutOutline class="icon" />
                  <a class="nav-link">Cabeleireiros</a>
                </Link>
              </li>

              <li>
                <Link to="/">
                  <IoSettingsOutline class="icon" />
                  <a class="nav-link">Configurações</a>
                </Link>
              </li>
            </ul>

            <div
              class="menu-icons open"
              onClick={() => {
                console.log("a");
                setNavActive(true);
              }}
            >
              <IoMenu class="icon" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
