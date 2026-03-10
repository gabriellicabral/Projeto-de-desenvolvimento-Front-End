// Página de planos do site.
// Aqui mostramos as opções de assinatura disponíveis para o usuário escolher.

//Sobre a Function:
// Criamos uma função chamada Planos.
// No React, funções como essa são chamadas de componentes.
// Cada componente representa uma parte da interface do site.
// Tudo que estiver dentro do "return" será exibido na tela.
function Planos(){
    return(

    /* 
      Seção principal da página de planos.
      Nela exibimos três opções de assinatura:
      Básico, Escolar e Premium.
    */

<section className="planos">
  <div className="container">

      {/* Título da página */}
      <h1>Planos</h1>

<div className="todososcards_planos">

      {/* Card do plano básico */}
      <div className="cardplanos">
        <h3>Básico</h3>

        {/* Lista de benefícios do plano */}
        <ul>
          <li>Pagamento por corrida</li>
          <li>Motoristas verificados</li>
          <li>Corrida sob demanda</li>
          <li>Suporte via Chat</li>
        </ul>

        {/* Valor do plano */}
        <h2 className="valores">R$15,50 por mês</h2>
      </div>


      {/* Card do plano escolar */}
      <div className="cardplanos"> 
        <h3>Escolar</h3>

        {/* Benefícios do plano escolar */}
        <ul>
          <li>Para uso diário escolar</li>
          <li>Motoristas verificados</li>
          <li>Prioridade de corrida</li>
          <li>Suporte 24/7 em todos os nossos meios</li>
          <li>Desconto em Serviços</li>
        </ul>

        {/* Valor do plano */}
        <h2 className="valores">R$25,50 por mês</h2>
      </div>


      {/* Card do plano premium */}
      <div className="cardplanos">
        <h3>Premium</h3>

        {/* Benefícios do plano premium */}
        <ul>
          <li>Atendimento prioritário</li>
          <li>Motoristas verificados</li>
          <li>Prioridade de corrida</li>
          <li>Suporte 24/7 em todos os nossos meios</li>
          <li>Desconto em Serviços</li>
          <li>Acesso de emergência</li>
          <li>Corridas Ilimitadas</li>
        </ul>

        {/* Valor do plano */}
        <h2 className="valores">R$30,00 por mês</h2>
      </div>

      </div>
      </div>
    </section>

    )
}

// Exportamos o componente Planos.
// Isso permite que ele seja usado em outros arquivos do projeto,
// como por exemplo no App.jsx, onde configuramos as rotas do site.
export default Planos;

