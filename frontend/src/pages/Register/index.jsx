export default function Register() {
    return (
        <div class="main-container">
        <form action="#" id="form-container">
            <legend>Cadastre-se</legend>

            <label for="name" class="form-content">Nome:</label>
            <input type="text" id="name" name="name" class="form-content"/>

            <label for="username" class="form-content">Username:</label>
            <input type="text" id="username" name="username" class="form-content"/>

            <label for="birthday" class="form-content">Data de Nascimento:</label>
            <input type="date" id="birthday" name="birthday" class="form-content"/>

            <label for="email" class="form-content">E-mail:</label>
            <input type="email" id="email" name="email" class="form-content"/>

            <label for="password" class="form-content">Senha:</label>
            <input type="password" id="password" name="password" class="form-content"/>

            <label for="confirm-password" class="form-content">Confirmação Senha:</label>
            <input type="password" id="confirm-password" name="confirm-password" class="form-content"/>

            <button type="submit" id="submit">Cadastre-se</button>
        </form>
    </div>
    )
}