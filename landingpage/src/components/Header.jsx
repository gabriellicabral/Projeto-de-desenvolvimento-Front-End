//Criando a função  do componente Header(cabeçalho)
//Este componente é responsável por exibir o logotipo e o título do site,
// além de fornecer links de navegação para outras seções do site.
//no final, exportamos o componente para que ele possa ser usado em outras partes do aplicativo.
//por exemplo, se navegarmos para outras paginas, o header permanecerá consistente em todas elas.
import logo from "../assets/logo.png";
function Header () {
    return (
        <header className="header">
            <div className="logoetitulo">
                <img src={logo} alt="Logo Internacional de Acessibilidade" className="headerlogo" />
                <h1>Mobilidade Inclusiva</h1>
            </div>
            <nav className="navdaheader"> 
                <a href="/sobre">Sobre</a>
                <a href="/planos">Planos</a>
                <a href="/seguranca">Segurança</a>
                <a href="/cadastro">Cadastro</a>
                <a href="/home">Home</a>
            </nav>
        </header>
    )
}

export default Header;  