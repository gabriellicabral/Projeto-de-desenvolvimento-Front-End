//criando a página sobre.jsx
//essa pagina é para mostrar informações sobre a empresa ou o site, como a história, missão, visão, equipe, etc. 
// Ela pode conter textos, imagens, vídeos ou outros elementos que ajudem a contar a história da empresa 
//ela pode ser acessada através do menu de navegação(na header e no footer) 
//ela é uma das rotas principais do site, junto com a home, segurança e cadastro.


function Sobre(){
    return(
        <section className="sobre">
             <h1>Sobre a Mobilidade Inclusiva</h1>
             <div className="todososcards">
            <div className="card">
                <h3>Nossa História</h3>
                <p>A Mobilidade Inclusiva nasceu dentro de uma sala de aula, a partir da união de quatro estudantes que compartilham o mesmo propósito: promover mais inclusão e acessibilidade na mobilidade urbana</p>
            </div>
            <div className="card"> 
                <h3>Acessibilidade</h3>
                <p>Buscamos facilitar o acesso a informações sobre mobilidade urbana
        acessível, conectando tecnologia e inclusão para ajudar pessoas
        no dia a dia.</p>
            </div>
            <div className="card">
                <h3>Tecnologia</h3>
                <p>  Utilizamos a tecnologia como ferramenta para promover inclusão
        e contribuir para cidades mais acessíveis e preparadas para todos.</p>
            </div>
            </div>
        </section>
    )
}

export default Sobre;