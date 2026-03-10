// Página inicial do site (Home).
// Essa página é normalmente a primeira que o usuário vê ao entrar no site.
// Ela também serve como ponto de partida para navegar para outras páginas,
// como Sobre, Planos, Segurança e Cadastro.

// Criamos uma função chamada Home.
// No React, funções como essa são chamadas de componentes.
// Cada componente representa uma parte da interface do site.
function Home(){
    return(

        // Seção principal da página inicial
        <section className="secaohome">


        {/* div envolvendo todo o conteúdo */}
            <div className="container">

            {/* Área onde ficam o título e o texto principal */}
            <div className="divconteudohome">

                {/* Título principal da página */}
                <h1>
                INDEPENDÊNCIA COMEÇA QUANDO O MUNDO SE TORNA ACESSÍVEL PARA TODOS
                </h1>

                {/* Texto explicando o objetivo do site */}
                <h3>
                Criamos este site para conectar pessoas a soluções que promovem acessibilidade,
                mobilidade e autonomia no dia a dia.
                Porque acreditamos que tecnologia deve incluir, facilitar e aproximar pessoas.
                </h3>


            {/* a tag <a> é usada para criar um link para a página de cadastro, 
            seguida do href que é o caminho para a página de cadastro. 
            Essa navegação será executada ao clicar no button */}

            <a href="/cadastro">

                {/* Botão que leva o usuário para a página de cadastro */}
                <button className="buttonhome">
                    CADASTRO
                </button>
                </a>
                <a href="/trabalheconosco">
                <button className="buttonhome">
                    TRABALHE CONOSCO
                </button>
                </a>
                </div>
                </div>

            

        </section>
    )
}


// Exportamos o componente Home para que ele possa ser usado
// em outros arquivos do projeto, como no App.jsx onde configuramos as rotas.
export default Home;

