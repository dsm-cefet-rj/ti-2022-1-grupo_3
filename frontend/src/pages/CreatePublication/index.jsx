export default function CreatePublication() {
    return (
        <main>
        <div class="main-container">
            <form action="#" method="post" id="form-container">
                <legend>Criar Publicação</legend>

                <div class="title">
                    <input type="text" placeholder="Nome do Corte"/>
                </div>

                <div class="input-container description">
                    <label for="description" class="form-content">Descrição:</label>
                    <textarea name="description" placeholder="Descrição da publicação"></textarea>
                </div>

                <div class="input-container image">
                    <img src="#" alt="Referência da publicação"/>
                    <input type="file"/>
                </div>

                <div class="input-container price">
                    <label for="price">R$</label>
                    <input type="number"/>
                </div>

                <div id="button-container">
                    <button type="text" href="./Profile_Cabeleireiro.html">Voltar</button>
                    <button type="text" class="submit"><a href="./Profile_Cabeleireiro.html">Publicar</a></button>
                </div>
            </form>
        </div>
    </main>
    )
}