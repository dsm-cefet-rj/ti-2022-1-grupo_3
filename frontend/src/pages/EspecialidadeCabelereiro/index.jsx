import "../../styles/EspecialidadeCabelereiro.css";

export default function EspecialidadeCabelereiro() {
    return (
        <main>
            <header className="user-profile-container">
                <div className="user-profile">
                    <div className="user-pp-wrapper">
                        <img
                            src="public/images/placeholder_cabeleireiro.jpg"
                            alt="Foto de perfil do cabelereiro"
                        />
                    </div>

                    <h2 className="user-name">Nome do cabelereiro</h2>

                    <p className="user-description">
                        Breve descrição do cabelereiro e de seu trabalho
                    </p>

                    <button className="edit profile" type="button">
                        Editar perfil
                    </button>

                    <div className="user-stats">
                        <dl className="stat">
                            <dt>Nota</dt>
                            <dd>4.8</dd>
                        </dl>
                        <dl className="stat">
                            <dt>Fãs</dt>
                            <dd>674</dd>
                        </dl>
                        <dl className="stat">
                            <dt>Seguidores</dt>
                            <dd>580</dd>
                        </dl>
                    </div>
                </div>
            </header>

            <section>
                <div>
                    <ul className="profile-tabs">
                        <Link to="#" href="#">
                            <li>Meus cortes</li>
                        </Link>
                        <Link to="#" className="selected">
                            <li>Minhas especialidades</li>
                        </Link>
                    </ul>
                </div>

                <article className="cut-container">
                    <img
                        src="public/images/especialidade_1.jpeg"
                        alt="Imagem exemplo da especialidade 1"
                    />
                    <p>Especialidade 1: Coloração</p>
                    <button className="edit" type="button">Editar</button>
                </article>

                <article className="cut-container">
                    <img
                        src="public/images/especialidade_2.jpeg"
                        alt="Imagem exemplo da especialidade 2"
                    />
                    <p>Especialidade 2: Cortes Femininos</p>
                    <button className="edit" type="button">Editar</button>
                </article>

                <article className="cut-container">
                    <img
                        src="public/images/especialidade_3.jpeg"
                        alt="Imagem exemplo da especialidade 3"
                    />
                    <p>Especialidade 3: Cabelos Cacheados e Crespos</p>
                    <button className="edit" type="button">Editar</button>
                </article>
            </section>
        </main>

    )

}