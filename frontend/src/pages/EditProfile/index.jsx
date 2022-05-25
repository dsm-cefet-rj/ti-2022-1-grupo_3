import Footer from "../../components/Footer"
import Header from "../../components/Header"

import "../../styles/EditProfile.css"

export default function EditProfile() {
    return (
        <>
        <Header/>
            <div className="main-container">
            <form action="#" id="form-container">
                <legend>Edite seu perfil</legend>

                <label for="name" className="form-content">Nome:</label>
                <input type="text" id="name" name="name" className="form-content"/>

                <label for="username" className="form-content">Username:</label>
                <input type="text" id="username" name="username" className="form-content"/>

                <label for="biografia" className="form-content">Biografia:</label>
                <input type="text" id="biografia" name="biografia" className="form-content"/>

                <label for="email" className="form-content">E-mail:</label>
                <input type="email" id="email" name="email" className="form-content"/>

                <label for="telefone" className="form-content">Telefone:</label>
                <input type="text" id="telefone" name="telefone" className="form-content"/>

                <button type="submit" id="submit">Editar Perfil</button>
            </form>
        </div>

    <Footer/>
    </>
    );
}