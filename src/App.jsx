import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CadastroPet from './components/CadastroPet';
import CadastroAdotados from './components/cadastroadotados'; // Importando a nova ficha

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-4"> {/* Container para centralizar o conteúdo */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<CadastroPet />} />
          {/* Nova rota para a ficha de pets adotados */}
          <Route path="/adotados" element={<CadastroAdotados />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;