// Página de segurança do site.
// Aqui mostramos informações sobre como a plataforma protege
// os dados e a segurança dos usuários.

// Criamos uma função chamada Seguranca.
// No React, funções como essa são chamadas de componentes.
// Cada componente representa uma parte da interface do site.
function Seguranca(){
    return(

        // Área principal da página de segurança
        <section>
        <div>

            {/* Título da página */}
            <h1>Segurança</h1>

            {/* Texto introdutório sobre segurança da plataforma */}
            <p>Conteúdo relacionado à segurança.</p>

        </div>
        </section>
    );
}


// Exportamos o componente Seguranca para que ele possa ser
// utilizado em outros arquivos do projeto,
// como no App.jsx onde definimos as rotas do site.
export default Seguranca;

