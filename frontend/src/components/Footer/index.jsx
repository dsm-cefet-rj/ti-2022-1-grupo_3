import { Link } from "react-router-dom";

import "../../styles/Footer.css"

export default function Footer(props) {
    return (
        <>
            <footer id="footer-container">
                <Link to="/register" id="sign-in"> {/* Fazer página de login*/}
                    <p>Entrar</p>
                </Link>

                <div id="social">
                    <a href="#"><img src="./facebook.svg" alt="Logo do Facebook"/></a>
                    <a href="#"><img src="./instagram.svg" alt="Logo do Instagram"/></a>
                    <a href="#"><img src="./twitter.svg" alt="Logo dp Twitter"/></a>
                </div>

                <div id="copy">
                    <p>@YourHair, 2022</p>
                </div>
            </footer>
        </>
    );
}