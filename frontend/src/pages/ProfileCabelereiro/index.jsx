import "../../styles/ProfileCabelereiro.css"

export default function ProfileCabelereiro() {
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

                    <h2 class="user-name">Nome do cabeleireiro</h2>
                    <h2 class="user-name">Nome do cabelereiro</h2>

                    <p class="user-description">
                        Breve descrição do cabeleireiro e de seu trabalho
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
                        <a class="selected" href="#">
                            <li>Meus cortes</li>
                        </a>
                        <a href="especialidade_cabelereiro.html">
                            <li>Minhas especialidades</li>
                        </a>
                    </ul>
                </div>
                <article class="cut-container">
                    <img
                        src="public/images/hair_1.jpg"
                        alt="Imagem exemplo do corte 1"
                    />
                    <p>Descrição do corte 1</p>
                    <button class="edit" type="button">Editar</button>
                </article>
                <article class="cut-container">
                    <img
                        src="public/images/hair_2.jpg"
                        alt="Imagem exemplo do corte 2"
                    />
                    <p>Descrição do corte 2</p>
                    <button class="edit" type="button">Editar</button>
                </article>
                <article class="cut-container">
                    <img
                        src="public/images/hair_3.jpg"
                        alt="Imagem exemplo do corte 3"
                    />
                    <p>Descrição do corte 3</p>
                    <button class="edit" type="button">Editar</button>
                </article>
            </section>
        </main>
    )
}




