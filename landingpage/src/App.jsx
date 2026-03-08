
//aqui estamos importando o BrowserRouter, Routes e Route do react-router-dom
//para configurar as rotas da nossa pagina. 
import { BrowserRouter, Routes, Route } from "react-router-dom";

//importando o cabeçalho e rodapé para serem utilizados em todas as páginas.
import Header from "./components/Header";
import Footer from "./components/Footer";

// Em seguida, importamos os componentes das páginas que serão renderizadas em cada rota. 
//como isto está funcionando:
//'import'(importe) 'Home'(componente Home) 'from' (de) agora o caminho do arquivo Home.jsx) "./pages/Home";
//significado do caminho:
//"./" indica que o arquivo está na mesma pasta do App.jsx, que é a pasta src
//"pages/" indica que o arquivo está dentro da pasta pages, que é uma subpasta de src
//"Home" indica o nome do arquivo Home.jsx, sem a extensão .jsx, que é o componente que queremos importar.

//e por assim em diante para as outras páginas, como Sobre, Planos, Segurança e Cadastro.
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Planos from "./pages/Planos";
import Seguranca from "./pages/Seguranca";
import Cadastro from "./pages/Cadastro";



// Dentro do componente App, utilizamos o BrowserRouter para envolver as rotas

//importamos a header e o footer para que eles sejam exibidos em todas as páginas

//  e definimos cada rota com o componente Route, especificando o caminho

//  e o componente a ser renderizado.
//como isto está funcionando:
//<BrowserRouter> é o componente que envolve as rotas e permite a navegação entre elas.
//<Routes> é o componente que agrupa as rotas e garante que apenas uma rota seja renderizada por vez.

//<Route path="/" element={<Home />} /> define a rota para a página inicial, onde o caminho é "/" e o componente renderizado é <Home />.

//<Route path="/sobre" element={<Sobre />} /> define a rota para a página sobre, onde o caminho é "/sobre" e o componente renderizado é <Sobre />.

//<Route path="/planos" element={<Planos />} /> define a rota para a página de planos, onde o caminho é "/planos" e o componente renderizado é <Planos />.

//<Route path="/seguranca" element={<Seguranca />} /> define a rota para a página de segurança, onde o caminho é "/seguranca" e o componente renderizado é <Seguranca />.

//<Route path="/cadastro" element={<Cadastro />} /> define a rota para a página de cadastro, onde o caminho é "/cadastro" e o componente renderizado é <Cadastro />.
function App() {
  return (
    <BrowserRouter>
   <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/seguranca" element={<Seguranca />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>

      <Footer />
      
    </BrowserRouter>
  );
}


//  Por fim, exportamos o componente App para ser utilizado em outros arquivos.
export default App;