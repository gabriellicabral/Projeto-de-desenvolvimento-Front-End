//Criando a função do componente Footer(rodapé)
//Este componente é responsável por exibir informações de contato, links para redes sociais e direitos autorais do site.
// Ele é colocado na parte inferior da página e permanece consistente em todas as páginas do site.
// No final, exportamos o componente para que ele possa ser usado em outras partes do aplicativo.

function Footer(){
    return(
        <footer className="footer">
            <nav className="navdafooter">
                <div className="divnavdafooter">
                <a href="/sobre">Sobre</a>
                <a href="/planos">Planos</a>
                <a href="/seguranca">Segurança</a>
                <a href="/cadastro">Cadastro</a>
                <a href="/home">Home</a>
                </div>
            </nav>

            <p>© 2026 Mobilidade Inclusiva. Todos os direitos reservados.</p>
        </footer>
    );
}

export default Footer;