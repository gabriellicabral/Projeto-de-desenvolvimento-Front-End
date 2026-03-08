//criando a página de planos, onde o cliente pode escolher o plano que melhor se encaixe em suas necessidades.
//essa página pode conter informações sobre os diferentes planos disponíveis, como o plano básico, o plano escolar e o plano premium, com suas respectivas vantagens e preços. 
//ela pode ser acessada através do menu de navegação(na header e no footer) 
//ela é uma das rotas principais do site, junto com a home, segurança, sobre e cadastro.


function Planos(){
    return(
        /*rascunho da página de planos, onde o cliente pode escolher o plano que melhor se encaixe em suas necessidades.*/


<section className="planos">
      <h1>Planos</h1>
<div className="todososcards_planos">
      <div className="cardplanos">
        <h3>Básico</h3>
        <p>Pagamento por corrida</p>
      </div>

      <div className="cardplanos"> 
        <h3>Escolar</h3>
        <p>Para uso diário escolar</p>
      </div>

      <div className="cardplanos">
        <h3>Premium</h3>
        <p>Atendimento prioritário</p>
      </div>
      </div>
    </section>

    )
}

export default Planos;