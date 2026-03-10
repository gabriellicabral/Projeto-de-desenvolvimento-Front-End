function Cadastro(){
    return(
        <section className="secaodecadastro">

            <div className="container">

                <div className="cadastrodiv">

                    <form className="formgrid">

                        {/* COLUNA RESPONSÁVEL */}
                        <div className="coluna">

                            <h2>👤 Cadastro do Responsável</h2>

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

                        </div>


                        {/* COLUNA PASSAGEIRO */}
                        <div className="coluna">

                            <h2>♿ Informações do Passageiro</h2>

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

                        </div>

                        <button type="submit" className="botaocadastro">Cadastrar</button>

                    </form>

                </div>

            </div>

        </section>
    )
}

export default Cadastro;