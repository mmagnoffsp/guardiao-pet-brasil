import React, { useState } from 'react';
import { s } from '../styles/theme';
import { Camera, Save, PawPrint } from 'lucide-react';

export default function FichaPet() {
  const [nome, setNome] = useState('');

  return (
    <div>
      <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ff6600', marginBottom: '20px' }}>
        <PawPrint size={22} /> Cadastro do Pet
      </h3>

      <div style={{ textAlign: 'center', padding: '30px', border: '2px dashed #e2e8f0', borderRadius: '20px', marginBottom: '20px', backgroundColor: '#f8fafc' }}>
        <Camera size={32} color="#94a3b8" />
        <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '8px' }}>Adicionar foto do animal</p>
      </div>

      <label style={s.label}>Nome do Pet</label>
      <input 
        style={s.input} 
        placeholder="Ex: Pipoca" 
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <div>
          <label style={s.label}>Espécie</label>
          <select style={s.input}>
            <option>Cão</option>
            <option>Gato</option>
          </select>
        </div>
        <div>
          <label style={s.label}>Porte</label>
          <select style={s.input}>
            <option>Pequeno</option>
            <option>Médio</option>
            <option>Grande</option>
          </select>
        </div>
      </div>

      <button style={s.btnPrimary}>
        <Save size={20} /> SALVAR ANIMAL
      </button>
    </div>
  );
}