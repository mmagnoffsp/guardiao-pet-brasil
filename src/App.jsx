import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CadastroPet from './pages/CadastroPet'; // Vamos criar este arquivo no passo 2

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CadastroPet />} />
      </Routes>
    </Router>
  );
}

export default App;