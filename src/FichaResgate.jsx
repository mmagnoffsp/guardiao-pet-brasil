import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  color: '#2d3436',
  fontWeight: '600',
  fontSize: '0.9rem'
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #dfe6e9',
  backgroundColor: '#ffffff',
  fontSize: '1rem',
  color: '#2d3436',
  boxSizing: 'border-box',
  outlineColor: '#27ae60'
};

function FichaResgate() {
  const [formData, setFormData] = useState({
    nome_pet: '',
    nome_resgatante: '',
    local_resgate: '',
    data_resgate: '',
    hora_resgate: '',
    clinica: '',
    medicacao_aplicada: '',
    nome_medico: '',
    crmv: '',
    materiais_usados: '',
    valor_gasto: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('resgates').insert([formData]);

    if (error) {
      alert("Erro ao salvar resgate: " + error.message);
    } else {
      alert("Ficha de resgate salva com sucesso! 🚑");
      setFormData({
        nome_pet: '', nome_resgatante: '', local_resgate: '', data_resgate: '',
        hora_resgate: '', clinica: '', medicacao_aplicada: '',
        nome_medico: '', crmv: '', materiais_usados: '', valor_gasto: ''
      });
    }
  };

  return (
    <main style={{ padding: '2rem 1rem', fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '800px', width: '100%', backgroundColor: '#ffffff', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
        <h1 style={{ color: '#d63031', textAlign: 'center', fontSize: '1.8rem' }}>🚑 Ficha de Resgate</h1>
        <p style={{ color: '#636e72', textAlign: 'center', marginBottom: '30px' }}>Registre os detalhes do resgate e controle de custos médicos.</p>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          
          {/* Dados do Resgate */}
          <div>
            <label style={labelStyle}>Nome do Pet (ou ID Temporário)</label>
            <input style={inputStyle} name="nome_pet" value={formData.nome_pet} onChange={handleChange} placeholder="Ex: Doguinho da Praça" required />
          </div>
          <div>
            <label style={labelStyle}>Nome do Resgatante</label>
            <input style={inputStyle} name="nome_resgatante" value={formData.nome_resgatante} onChange={handleChange} placeholder="Quem realizou o resgate?" required />
          </div>

          <div style={{ gridColumn: '1 / span 2' }}>
            <label style={labelStyle}>Local do Resgate</label>
            <input style={inputStyle} name="local_resgate" value={formData.local_resgate} onChange={handleChange} placeholder="Endereço ou ponto de referência" />
          </div>

          <div>
            <label style={labelStyle}>Data</label>
            <input style={inputStyle} type="date" name="data_resgate" value={formData.data_resgate} onChange={handleChange} required />
          </div>
          <div>
            <label style={labelStyle}>Hora</label>
            <input style={inputStyle} type="time" name="hora_resgate" value={formData.hora_resgate} onChange={handleChange} />
          </div>

          <hr style={{ gridColumn: '1 / span 2', width: '100%', border: '0.5px solid #eee' }} />

          {/* Dados Clínicos */}
          <div>
            <label style={labelStyle}>Clínica Veterinária</label>
            <input style={inputStyle} name="clinica" value={formData.clinica} onChange={handleChange} placeholder="Nome do hospital/clínica" />
          </div>
          <div>
            <label style={labelStyle}>Médico Veterinário</label>
            <input style={inputStyle} name="nome_medico" value={formData.nome_medico} onChange={handleChange} placeholder="Nome do Dr(a)." />
          </div>
          <div>
            <label style={labelStyle}>Registro (CRMV)</label>
            <input style={inputStyle} name="crmv" value={formData.crmv} onChange={handleChange} placeholder="Número do registro" />
          </div>
          <div>
            <label style={labelStyle}>Valor Gasto (R$)</label>
            <input style={inputStyle} type="number" step="0.01" name="valor_gasto" value={formData.valor_gasto} onChange={handleChange} placeholder="0,00" />
          </div>

          <div style={{ gridColumn: '1 / span 2' }}>
            <label style={labelStyle}>Medicação Aplicada no Local</label>
            <input style={inputStyle} name="medicacao_aplicada" value={formData.medicacao_aplicada} onChange={handleChange} placeholder="Remédios, soro, etc." />
          </div>

          <div style={{ gridColumn: '1 / span 2' }}>
            <label style={labelStyle}>Histórico de Materiais Usados</label>
            <textarea style={inputStyle} name="materiais_usados" value={formData.materiais_usados} onChange={handleChange} rows="3" placeholder="Gaze, seringas, talas..." />
          </div>

          <button type="submit" style={{ gridColumn: '1 / span 2', backgroundColor: '#d63031', color: 'white', border: 'none', padding: '16px', borderRadius: '10px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}>
            Salvar Ficha de Resgate
          </button>
        </form>
      </div>
    </main>
  );
}

export default FichaResgate;