import { Link } from "react-router-dom";

import "../../styles/Footer.css";

export default function Footer(props) {
    return (
        <>
            <footer id="footer-container">
                <Link to="/register" id="sign-in"> {/* Fazer página de login*/}
                    <p>Entrar</p>
                </Link>

                <div id="social">
                    <Link to="#"><img src="./facebook.svg" alt="Logo do Facebook"/></Link>
                    <Link to="#"><img src="./instagram.svg" alt="Logo do Instagram"/></Link>
                    <Link to="#"><img src="./twitter.svg" alt="Logo dp Twitter"/></Link>
                </div>

                <div id="copy">
                    <p>@YourHair, 2022</p>
                </div>
            </footer>
        </>
    );
}