import React, { useState } from 'react';
import { s } from './styles/theme';
import FichaPet from './pages/FichaPet';
import FichaDoador from './pages/FichaDoador';
import { Dog, HeartHandshake, AlertTriangle } from 'lucide-react';

function App() {
  const [abaAtiva, setAbaAtiva] = useState('pet');

  const abas = [
    { id: 'pet', label: 'Pets', icone: <Dog size={18} /> },
    { id: 'doador', label: 'Doadores', icone: <HeartHandshake size={18} /> },
    { id: 'resgate', label: 'Resgates', icone: <AlertTriangle size={18} /> },
  ];

  return (
    <div style={s.container}>
      <header style={s.header}>
        <h1 style={{ color: '#ff6600', fontWeight: '900', margin: 0 }}>Guardião Pet Brasil</h1>
        <p style={{ color: '#94a3b8', fontSize: '14px' }}>Versão Enxuta 2026</p>
      </header>

      <nav style={s.tabBar}>
        {abas.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setAbaAtiva(tab.id)}
            style={s.tab(abaAtiva === tab.id)}
          >
            {tab.icone} {tab.label}
          </button>
        ))}
      </nav>

      <main style={s.card}>
        {abaAtiva === 'pet' && <FichaPet />}
        {abaAtiva === 'doador' && <FichaDoador />}
        {abaAtiva === 'resgate' && <p style={{textAlign: 'center', color: '#94a3b8'}}>Em desenvolvimento...</p>}
      </main>
    </div>
  );
}

export default App;