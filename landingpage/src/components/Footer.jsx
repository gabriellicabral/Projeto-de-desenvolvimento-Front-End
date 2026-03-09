
// Componente Footer (rodapé do site).
// Ele é responsável por mostrar links de navegação
// e informações de direitos autorais da plataforma.

// O Footer aparece em todas as páginas do site,
// pois ele é importado no App.jsx junto com o Header.


// Criamos uma função chamada Footer.
// No React, funções como essa são chamadas de componentes.
// Cada componente representa uma parte da interface do site.
function Footer(){
    return(

        // Tag semântica <footer> representa o rodapé da página
        <footer className="footer">

            {/* Área de navegação do rodapé */}
            <nav className="navdafooter">

                {/* Container que agrupa os links de navegação */}
                <div className="divnavdafooter">

                    {/* Links para navegar entre as páginas do site */}
                    <a href="/sobre">Sobre</a>
                    <a href="/planos">Planos</a>
                    <a href="/seguranca">Segurança</a>
                    <a href="/cadastro">Cadastro</a>
                    <a href="/home">Home</a>

                </div>

            </nav>

            {/* Texto de direitos autorais do site */}
            <p>© 2026 Mobilidade Inclusiva. Todos os direitos reservados.</p>

        </footer>
    );
}


// Exportamos o componente Footer para que ele possa
// ser utilizado em outros arquivos do projeto,
// como no App.jsx onde montamos a estrutura do site.
export default Footer;

