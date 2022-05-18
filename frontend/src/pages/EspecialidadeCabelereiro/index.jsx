import "../../styles/EspecialidadeCabelereiro.css"

export default function EspecialidadeCabelereiro() {
    return (
        <main>
            <header class="user-profile-container">
                <div class="user-profile">
                    <div class="user-pp-wrapper">
                        <img
                            src="public/images/placeholder_cabeleireiro.jpg"
                            alt="Foto de perfil do cabelereiro"
                        />
                    </div>

                    <h2 class="user-name">Nome do cabelereiro</h2>

                    <p class="user-description">
                        Breve descrição do cabelereiro e de seu trabalho
                    </p>

                    <button class="edit profile" type="button">
                        Editar perfil
                    </button>

                    <div class="user-stats">
                        <dl class="stat">
                            <dt>Nota</dt>
                            <dd>4.8</dd>
                        </dl>
                        <dl class="stat">
                            <dt>Fãs</dt>
                            <dd>674</dd>
                        </dl>
                        <dl class="stat">
                            <dt>Seguidores</dt>
                            <dd>580</dd>
                        </dl>
                    </div>
                </div>
            </header>

            <section>
                <div>
                    <ul class="profile-tabs">
                        <a href="#">
                            <li>Meus cortes</li>
                        </a>
                        <a class="selected" href="#">
                            <li>Minhas especialidades</li>
                        </a>
                    </ul>
                </div>

                <article class="cut-container">
                    <img
                        src="public/images/especialidade_1.jpeg"
                        alt="Imagem exemplo da especialidade 1"
                    />
                    <p>Especialidade 1: Coloração</p>
                    <button class="edit" type="button">Editar</button>
                </article>

                <article class="cut-container">
                    <img
                        src="public/images/especialidade_2.jpeg"
                        alt="Imagem exemplo da especialidade 2"
                    />
                    <p>Especialidade 2: Cortes Femininos</p>
                    <button class="edit" type="button">Editar</button>
                </article>

                <article class="cut-container">
                    <img
                        src="public/images/especialidade_3.jpeg"
                        alt="Imagem exemplo da especialidade 3"
                    />
                    <p>Especialidade 3: Cabelos Cacheados e Crespos</p>
                    <button class="edit" type="button">Editar</button>
                </article>
            </section>
        </main>

    )

}