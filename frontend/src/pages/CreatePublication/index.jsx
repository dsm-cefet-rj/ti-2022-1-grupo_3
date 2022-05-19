import Footer from "../../components/Footer"
import Header from "../../components/Header"

import "../../styles/Schendule.css"

export default function CreatePublication() {
    return (
        <>
        <Header/>
            <main>
                <div className="main-container">
                    <form action="#" method="post" id="form-container">
                        <legend>Criar Publicação</legend>

                        <div className="title">
                            <input type="text" placeholder="Nome do Corte"/>
                        </div>

                        <div className="input-container description">
                            <label for="description" className="form-content">Descrição:</label>
                            <textarea name="description" placeholder="Descrição da publicação"></textarea>
                        </div>

                        <div className="input-container image">
                            <img src="#" alt="Referência da publicação"/>
                            <input type="file"/>
                        </div>

                        <div className="input-container price">
                            <label for="price">R$</label>
                            <input type="number"/>
                        </div>

                        <div id="button-container">
                            <button type="text" href="./Profile_Cabeleireiro.html">Voltar</button>
                            <button type="text" className="submit"><a href="./Profile_Cabeleireiro.html">Publicar</a></button>
                        </div>
                    </form>
                </div>
            </main>
        <Footer/>
        </>
    );
}