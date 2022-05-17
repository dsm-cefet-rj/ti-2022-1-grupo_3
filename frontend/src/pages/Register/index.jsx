export default function Register() {
    return (
        <div class="main-container">
        <form action="#" id="form-container">
            <legend>Cadastre-se</legend>

            <label for="name" class="form-content">Nome:</label>
            <input type="text" name="Nome" class="form-content"/>

            <label for="username" class="form-content">Username:</label>
            <input type="text" name="username" class="form-content"/>

            <label class="form-content">Data de Nascimento:</label>
            <input type="date" class="form-content"/>

            <label class="form-content">E-mail:</label>
            <input type="email" class="form-content"/>

            <label class="form-content">Senha:</label>
            <input type="password" class="form-content"/>

            <label class="form-content">Confirmação Senha:</label>
            <input type="password" class="form-content"/>

            <button type="submit" id="submit">Cadastre-se</button>
        </form>
    </div>
    )
}