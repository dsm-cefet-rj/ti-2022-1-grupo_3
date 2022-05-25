import { useState } from "react";
import { IoClose, IoPersonOutline, IoCutOutline, IoSettingsOutline, IoMenu, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

import "../../styles/Header.css";

export default function Header(props) {
  const [isNavActive, setNavActive] = useState(false);

  return (
    <header>
      <div className="container">
        <nav id="header-nav">
          <div id="logo-container">
            <Link to="/" id="logo">
              <img src={process.env.PUBLIC_URL + '/Logo_YourHair.png'} alt="Logo do Your Hair" id="logo"/>
            </Link>
          </div>

          <div id="main-container" className={isNavActive && "active"}>
            <div className="search-container" title="O que deseja encontrar?">
              <form className="search-bar">
                <input type="search" placeholder="O que deseja encontrar?" />
                <button type="submit">
                  <IoSearch name="menu" className="icon" />
                </button>
              </form>
            </div>

            <ul id="nav-list">
              <div className="menu-icons close" onClick={() => setNavActive(false)}>
                <IoClose className="icon" />
              </div>

              <li>
                <Link to="/me">
                  <IoPersonOutline className="icon" />
                  <span className="nav-link">Seu Perfil</span>
                </Link>
              </li>

              <li>
                <Link to="/cabeleireiro">
                  <IoCutOutline className="icon" />
                  <span className="nav-link">Cabeleireiros</span>
                </Link>
              </li>

              <li>
                <Link to="/">
                  <IoSettingsOutline className="icon" />
                  <span className="nav-link">Configurações</span>
                </Link>
              </li>
            </ul>

            <div
              className="menu-icons open"
              onClick={() => {
                console.log("a");
                setNavActive(true);
              }}
            >
              <IoMenu className="icon" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
