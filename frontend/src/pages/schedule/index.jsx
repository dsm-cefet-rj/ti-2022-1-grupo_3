import Footer from "../../components/Footer"
import Header from "../../components/Header"

import "../../styles/Schendule.css"

export default function Schendule() {
    return (
        <>
        <Header/>
            <div className="main-container">
                <form action="#" id="form-container">
                    <legend>Marque o seu corte!!!</legend>

                    <label for="data" className="form-content">Data:</label>
                    <input type="data" name="data" className="form-content"/>

                    <label for="cabelereiro" className="form-content">Cabelereiro:</label>
                    <input type="text" name="cabelereiro" className="form-content"/>

                    <label className="form-content">Descrição do Corte:</label>
                    <input type="text"name="descrição" className="form-content"/>

                    <button type="submit" id="submit">Marcar</button>
                </form>
            </div>
        <Footer/>
        </>
    );
}