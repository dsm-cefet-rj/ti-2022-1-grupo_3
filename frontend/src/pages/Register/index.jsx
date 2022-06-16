import Footer from "../../components/Footer";
import Header from "../../components/Header";

import "../../styles/Register.css";

export default function Register() {
    return (
        <>
        <Header/>
            <div className="main-container">
            <form action="#" id="form-container">
                <legend>Cadastre-se</legend>

                <label for="name" className="form-content">Nome:</label>
                <input type="text" id="name" name="name" className="form-content"/>

                <label for="username" className="form-content">Username:</label>
                <input type="text" id="username" name="username" className="form-content"/>

                <label for="birthday" className="form-content">Data de Nascimento:</label>
                <input type="date" id="birthday" name="birthday" className="form-content"/>

                <label for="email" className="form-content">E-mail:</label>
                <input type="email" id="email" name="email" className="form-content"/>

                <label for="password" className="form-content">Senha:</label>
                <input type="password" id="password" name="password" className="form-content"/>

                <label for="confirm-password" className="form-content">Confirmação Senha:</label>
                <input type="password" id="confirm-password" name="confirm-password" className="form-content"/>

                <button type="submit" id="submit">Cadastre-se</button>
            </form>
        </div>

    <Footer/>
    </>
    );
}