//criando a pagina home.jsx
//essa pagina é a página inicial do site, onde os usuários podem encontrar informações gerais sobre o site, 
// como os serviços oferecidos, as vantagens de usar o site, as novidades, etc.
//ela serve como um ponto de partida para os usuários navegarem pelo site e conhecerem melhor a empresa
//é uma das rotas principais do site, junto com a segurança, sobre e cadastro.

function Home(){
    return(
        <section className="secaohome">
            <div className="divtextohome">
            <h1>INDEPENDÊNCIA COMEÇA QUANDO O MUNDO SE TONA ACESSÍVEL PARA TODOS</h1>
            <h3>Criamos este site para conectar pessoas a soluções que promovem acessibilidade, mobilidade e autonomia no dia a dia.
Porque acreditamos que tecnologia deve incluir, facilitar e aproximar pessoas.</h3>
</div>
<button className="buttonhome">CADASTRO</button>
        </section>
    )
}

export default Home;