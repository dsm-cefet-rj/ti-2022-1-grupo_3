import "../../styles/perfil_usuario.css"

export default function user() {
    return(
        <main>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
            <div class="profile">
                <img class="user-pp-wrapper" src="public/images/placeholder_usuario.jpeg" alt="Foto de Perfil"/>
                <h2>Nome usuário <span class="badge badge-secondary"></span></h2>
                <a href=''>Editar Perfil</a>
            </div>

            <h3>Últimos Cortes <span class="badge badge-secondary"></span></h3>

            <button id="button_corte" type="button" class="btn btn-primary">Adicionar novo corte</button>

            <div class="card" style="width: 18rem; display: inline-block; margin-bottom: 20px;">
                <img class="card-img-top" src="public/images/hair_2.jpg" alt="Primeiro Corte" />
                <div class="card-body">
                    <p class="card-text">Descrição sobre o corte 1</p>
                </div>
            </div>

            <div class="card" style="width: 18rem; display: inline-block; margin-left: 20px;">
                <img class="card-img-top" src="public/images/hair_3.jpg" alt="Segundo Corte" />
                <div class="card-body">
                    <p class="card-text">Descrição sobre o corte 2</p>
                </div>
            </div>

            <nav>
                <ul>
                    <a href="#"><li>Suas Avaliações</li></a>
                    <a href="#"><li>Ultimos Locais</li></a>
                </ul>
            </nav>

            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

        </main>
    )
}