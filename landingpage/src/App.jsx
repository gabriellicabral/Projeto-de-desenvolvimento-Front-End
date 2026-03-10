// Importando ferramentas do React Router.
// Elas permitem criar navegação entre páginas sem recarregar o site.
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importando o cabeçalho (Header) e o rodapé (Footer).
// Esses componentes aparecerão em todas as páginas do site.
import Header from "./components/Header";
import Footer from "./components/Footer";

// Importamos os componentes das páginas do site.
// Cada arquivo dentro da pasta "pages" representa uma página diferente.
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Planos from "./pages/Planos";
import Seguranca from "./pages/Seguranca";
import Cadastro from "./pages/Cadastro";
import Trabalheconosco from "./pages/trabalheconosco";  


// Função principal do aplicativo
function App() {

  // BrowserRouter controla a navegação do site
  // Routes agrupa todas as rotas do sistema
  // Route define qual página será exibida dependendo da URL

  return (
    <BrowserRouter>

      {/* Cabeçalho exibido em todas as páginas */}
      <Header />

      <Main>

      <Routes>

        {/* Página inicial */}
        <Route path="/Home" element={<Home />} />

        {/* Página "Sobre" */}
        <Route path="/sobre" element={<Sobre />} />

        {/* Página de planos */}
        <Route path="/planos" element={<Planos />} />

        {/* Página de segurança */}
        <Route path="/seguranca" element={<Seguranca />} />

        {/* Página de cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Página de trabalhe conosco */}
        <Route path="/trabalheconosco" element={<Trabalheconosco/>} />


      </Routes>
      </Main>

      {/* Rodapé exibido em todas as páginas */}
      <Footer />

    </BrowserRouter>
  );
}


// Exportamos o componente App para que ele possa ser usado em outros arquivos do projeto
export default App;

