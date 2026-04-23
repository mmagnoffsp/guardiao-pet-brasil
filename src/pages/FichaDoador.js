import React, { useState } from 'react';
import { s } from '../styles/theme';
import { Heart, Save, DollarSign } from 'lucide-react';

export default function FichaDoador() {
  return (
    <div>
      <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ff6600', marginBottom: '20px' }}>
        <Heart size={22} /> Nova Doação
      </h3>

      <div style={{ backgroundColor: '#fff5f0', padding: '15px', borderRadius: '15px', marginBottom: '20px', border: '1px solid #fed7aa' }}>
        <p style={s.label}>Chave Pix para Doações</p>
        <p style={{ fontSize: '16px', fontWeight: '800', color: '#1a202c', margin: 0 }}>doar@guardiaopet.org</p>
      </div>

      <label style={s.label}>Nome do Doador</label>
      <input style={s.input} placeholder="Nome completo ou Anônimo" />

      <label style={s.label}>Valor da Contribuição (R$)</label>
      <input style={s.input} type="number" placeholder="0,00" />

      <button style={s.btnPrimary}>
        <Save size={20} /> REGISTRAR DOAÇÃO
      </button>
    </div>
  );
}