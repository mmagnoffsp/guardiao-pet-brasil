import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CadastroPet from './components/CadastroPet';
import CadastroAdotados from './components/cadastroadotados'; // Importe corrigido

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-6 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<CadastroPet />} />
          <Route path="/adotados" element={<CadastroAdotados />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;