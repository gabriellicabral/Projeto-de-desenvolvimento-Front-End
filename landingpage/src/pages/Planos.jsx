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
        <ul>
          <li>Pagamento por corrida</li>
          <li>Motoristas verificados</li>
          <li>Corrida sob demanda</li>
          <li>Suporte via Chat</li>
        </ul>
        <h2 className="valores">R$15,50 por mês</h2>
      </div>

      <div className="cardplanos"> 
        <h3>Escolar</h3>
        <ul>
          <li>Para uso diário escolar</li>
          <li>Motoristas verificados</li>
          <li>Prioridade de corrida</li>
          <li>Suporte 24/7 em todos os nossos meios</li>
          <li>Desconto em Serviços</li>
        </ul>
        <h2 className="valores">R$25,50 por mês</h2>
      </div>

      <div className="cardplanos">
        <h3>Premium</h3>
        <ul>
          <li>Atendimento prioritário</li>
          <li>Motoristas verificados</li>
          <li>Prioridade de corrida</li>
          <li>Suporte 24/7 em todos os nossos meios</li>
          <li>Desconto em Serviços</li>
          <li>Acesso de emergência</li>
          <li>Corridas Ilimitadas</li>
        </ul>
    <h2 className="valores">R$30,00 por mês</h2>
      </div>
      </div>
    </section>

    )
}

export default Planos;