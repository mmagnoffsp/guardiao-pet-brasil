import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CadastroPet from './components/CadastroPet';
import CadastroAdotados from './components/cadastroadotados';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto py-8 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<CadastroPet />} />
            <Route path="/adotados" element={<CadastroAdotados />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;