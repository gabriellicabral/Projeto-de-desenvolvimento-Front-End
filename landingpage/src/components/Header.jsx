
// Componente Header (cabeçalho do site).
// Ele é responsável por mostrar o logo, o título da plataforma
// e os links de navegação para outras páginas do site.

// O Header aparece em todas as páginas,
// pois ele foi importado no App.jsx junto com o Footer.

// Importamos a imagem do logo que está na pasta assets
import logo from "../assets/logo.png";


// Criamos uma função chamada Header.
// No React, funções como essa são chamadas de componentes.
// Cada componente representa uma parte da interface do site.
function Header () {
    return (

        // Tag semântica <header> representa o cabeçalho da página
        <header className="header">

            {/* Área que contém o logo e o título do site */}
            <div className="logoetitulo">

                {/* Imagem do logo da plataforma */}
                <img 
                src={logo} 
                alt="Logo Internacional de Acessibilidade" 
                id="logoimg" 
                />

                {/* Nome da plataforma */}
                <h1>Mobilidade Inclusiva</h1>

            </div>


            {/* Menu de navegação do site */}
            <nav className="navdaheader"> 

                {/* Links para navegar entre as páginas */}
                <a href="/sobre">Sobre</a>
                <a href="/planos">Planos</a>
                <a href="/seguranca">Segurança</a>
                <a href="/cadastro">Cadastro</a>
                <a href="/home">Home</a>

            </nav>

        </header>
    )
}


// Exportamos o componente Header para que ele possa
// ser utilizado em outros arquivos do projeto,
// como no App.jsx onde montamos a estrutura do site.
export default Header;

