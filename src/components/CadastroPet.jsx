import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';

// Estilos mantidos para consistência visual
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

function CadastroPet() {
  const [formData, setFormData] = useState({
    nome: '',
    especie: '',
    idade: '',
    pelagem: '',
    peso: '',
    castrado: false,
    operado: false,
    vacinas: '',
    cirurgias: '',
    medicacoes: '',
    descricao: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('pets')
      .insert([formData]);

    if (error) {
      alert("Erro ao cadastrar: " + error.message);
    } else {
      alert("Pet cadastrado com sucesso! 🐾");
      setFormData({
        nome: '', especie: '', idade: '', pelagem: '', peso: '',
        castrado: false, operado: false, vacinas: '', cirurgias: '',
        medicacoes: '', descricao: ''
      });
    }
  };

  return (
    <main style={{ padding: '2rem 1rem', fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '700px', width: '100%', backgroundColor: '#ffffff', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
        <h1 style={{ color: '#2c3e50', textAlign: 'center', fontSize: '1.8rem' }}>📝 Cadastro de Pet</h1>
        <p style={{ color: '#636e72', textAlign: 'center', marginBottom: '30px' }}>Preencha os dados abaixo para ajudar na adoção.</p>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          
          <div style={{ gridColumn: '1 / span 2' }}>
            <label style={labelStyle}>Nome do animal</label>
            <input style={inputStyle} name="nome" value={formData.nome} onChange={handleChange} type="text" placeholder="Ex: Amigão" required />
          </div>

          {/* Seletor de Espécie */}
          <div>
            <label style={labelStyle}>Espécie</label>
            <select style={inputStyle} name="especie" value={formData.especie} onChange={handleChange} required>
              <option value="">Selecione...</option>
              <option value="Cachorro">Cachorro</option>
              <option value="Gato">Gato</option>
              <option value="Pássaro">Pássaro</option>
              <option value="Coelho">Coelho</option>
              <option value="Roedor">Roedor (Hamster, Porquinho da Índia)</option>
              <option value="Outros">Outros</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>Idade Aproximada</label>
            <input style={inputStyle} name="idade" value={formData.idade} onChange={handleChange} type="text" placeholder="Ex: 2 anos" />
          </div>

          <div>
            <label style={labelStyle}>Cor da Pelagem</label>
            <input style={inputStyle} name="pelagem" value={formData.pelagem} onChange={handleChange} type="text" placeholder="Ex: Caramelo" />
          </div>

          <div>
            <label style={labelStyle}>Peso (kg)</label>
            <input style={inputStyle} name="peso" value={formData.peso} onChange={handleChange} type="text" placeholder="Ex: 12kg" />
          </div>

          <div style={{ gridColumn: '1 / span 2', display: 'flex', gap: '20px', backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input type="checkbox" name="castrado" checked={formData.castrado} onChange={handleChange} style={{ width: '18px', height: '18px' }} /> Castrado
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input type="checkbox" name="operado" checked={formData.operado} onChange={handleChange} style={{ width: '18px', height: '18px' }} /> Já operado
            </label>
          </div>

          {/* Seletor de Vacinas */}
          <div style={{ gridColumn: '1 / span 2' }}>
            <label style={labelStyle}>Protocolo de Vacinação</label>
            <select style={inputStyle} name="vacinas" value={formData.vacinas} onChange={handleChange}>
              <option value="">Selecione a situação...</option>
              <option value="Nenhuma">Nenhuma vacina aplicada</option>
              <option value="Incompleto">Protocolo Incompleto</option>
              <option value="V8/V10 + Raiva (Cães)">V8/V10 + Raiva (Completa para Cães)</option>
              <option value="V3/V4/V5 + Raiva (Gatos)">V3/V4/V5 + Raiva (Completa para Gatos)</option>
              <option value="Apenas Raiva">Apenas Raiva</option>
              <option value="Totalmente Vacinado">Totalmente Vacinado (Outras espécies)</option>
              <option value="Desconhecido">Não possui informação</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>Cirurgias</label>
            <input style={inputStyle} name="cirurgias" value={formData.cirurgias} onChange={handleChange} type="text" placeholder="Caso tenha..." />
          </div>

          <div>
            <label style={labelStyle}>Medicações</label>
            <input style={inputStyle} name="medicacoes" value={formData.medicacoes} onChange={handleChange} type="text" placeholder="Caso use..." />
          </div>

          <div style={{ gridColumn: '1 / span 2' }}>
            <label style={labelStyle}>História ou Descrição</label>
            <textarea style={inputStyle} name="descricao" value={formData.descricao} onChange={handleChange} rows="4" placeholder="Conte sobre o pet..." required />
          </div>

          <button type="submit" style={{ gridColumn: '1 / span 2', backgroundColor: '#27ae60', color: 'white', border: 'none', padding: '16px', borderRadius: '10px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}>
            Finalizar Cadastro do Pet
          </button>
        </form>
      </div>
    </main>
  );
}

export default CadastroPet;