
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
        <div className="cadastrodiv">
               <form>

                    <h2>Cadastro do Responsável</h2>

                    <label>Nome completo</label>
                    <input type="text" name="nome" required />

                    <label>CPF</label>
                    <input type="text" name="cpf" />

                    <label>Telefone</label>
                    <input type="tel" name="telefone" />

                    <label>Endereço</label>
                    <input type="text" name="endereco" />

                    <label>Forma de pagamento</label>
                    <select name="pagamento">
                        <option>Pix</option>
                        <option>Cartão</option>
                        <option>Dinheiro</option>
                    </select>

                    <h2>Informações do Passageiro</h2>

                    <label>Tipo de deficiência</label>
                    <input type="text" name="deficiencia" />

                    <label>Necessidades específicas</label>
                    <textarea name="necessidades"></textarea>

                    <label>Usa cadeira de rodas?</label>
                    <select name="cadeira">
                        <option>Sim</option>
                        <option>Não</option>
                    </select>

                    <label>Necessita acompanhante?</label>
                    <select name="acompanhante">
                        <option>Sim</option>
                        <option>Não</option>
                    </select>

                    <button type="submit">Cadastrar</button>

                </form>
            


            
        </div>

        </section>
            
    )
}

// Exportamos o componente Cadastro para que ele possa ser utilizado
// em outros arquivos do projeto, como no App.jsx onde definimos as rotas.
export default Cadastro;

