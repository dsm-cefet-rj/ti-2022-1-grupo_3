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
            <Link to="/" id="logo">
              <img src="./Logo_YourHair.png" alt="Logo do Your Hair" id="logo"/>
            </Link>
          </div>

          <div id="main-container" className={isNavActive && "active"}>
            <div class="search-container" title="O que deseja encontrar?">
              <form class="search-bar">
                <input type="search" placeholder="O que deseja encontrar?" />
                <button type="submit">
                  <IoSearch name="menu" class="icon" />
                </button>
              </form>
            </div>

            <ul id="nav-list">
              <div class="menu-icons close" onClick={() => setNavActive(false)}>
                <IoClose class="icon" />
              </div>

              <li>
                <Link to="/me">
                  <IoPersonOutline class="icon" />
                  <span class="nav-link">Seu Perfil</span>
                </Link>
              </li>

              <li>
                <Link to="/cabeleireiro">
                  <IoCutOutline class="icon" />
                  <span class="nav-link">Cabeleireiros</span>
                </Link>
              </li>

              <li>
                <Link to="/">
                  <IoSettingsOutline class="icon" />
                  <span class="nav-link">Configurações</span>
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
