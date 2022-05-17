export default function Schendule() {
    return (
        <div class="main-container">
        <form action="#" id="form-container">
            <legend>Marque o seu corte!!!</legend>

            <label for="data" class="form-content">Data:</label>
            <input type="data" name="data" class="form-content"/>

            <label for="cabelereiro" class="form-content">Cabelereiro:</label>
            <input type="text" name="cabelereiro" class="form-content"/>

            <label class="form-content">Descrição do Corte:</label>
            <input type="text"name="descrição" class="form-content"/>

            <button type="submit" id="submit">Marcar</button>
        </form>
    </div>
    )
}