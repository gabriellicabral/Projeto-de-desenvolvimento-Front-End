
// Página de cadastro do site.
// Aqui o usuário poderá preencher um formulário com seus dados,
// como nome, email, senha e outras informações necessárias.

// Criamos uma função chamada Cadastro.
// No React, funções como essa são chamadas de componentes.
// Cada componente representa uma parte da interface do site.
function Cadastro(){
    return(
        
        // Seção principal da página de cadastro
        <section className="secaodecadastro">

        {/* Área destinada ao cadastro de usuários */}
        <div>
            <h1>Cadastro de usuário</h1>
        </div>
        
        {/* Área destinada ao cadastro de motoristas */}
        <div>
            <h1>Cadastro de motorista</h1>
        </div>

        </section>
            
    )
}

// Exportamos o componente Cadastro para que ele possa ser utilizado
// em outros arquivos do projeto, como no App.jsx onde definimos as rotas.
export default Cadastro;

