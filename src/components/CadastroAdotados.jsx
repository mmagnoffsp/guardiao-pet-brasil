import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; // Verifique se o caminho está correto

const CadastroAdotados = () => {
  const [formData, setFormData] = useState({
    nome_pet: '',
    idade: '',
    pelagem: '',
    vacinas: '',
    porte: '',
    nome_tutor: '',
    telefone: '',
    email: '',
    endereco: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Inserindo na tabela 'adotados' que criamos no Supabase
    const { data, error } = await supabase
      .from('adotados')
      .insert([formData]);

    if (error) {
      alert("Erro ao registrar: " + error.message);
    } else {
      alert("🎉 Adoção registrada com sucesso no Guardião Pet!");
      // Limpa os campos após o sucesso
      setFormData({
        nome_pet: '', idade: '', pelagem: '', vacinas: '',
        porte: '', nome_tutor: '', telefone: '', email: '', endereco: ''
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">🐾 Registro de Pet Adotado</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Seção do Pet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="nome_pet" placeholder="Nome do Pet" className="p-2 border rounded" onChange={handleChange} value={formData.nome_pet} required />
          <input name="idade" placeholder="Idade (ex: 2 anos)" className="p-2 border rounded" onChange={handleChange} value={formData.idade} />
          <input name="pelagem" placeholder="Pelagem/Cor" className="p-2 border rounded" onChange={handleChange} value={formData.pelagem} />
          <input name="vacinas" placeholder="Vacinas em dia?" className="p-2 border rounded" onChange={handleChange} value={formData.vacinas} />
          <input name="porte" placeholder="Porte (P, M, G)" className="p-2 border rounded" onChange={handleChange} value={formData.porte} />
        </div>

        <hr className="my-4" />
        <h3 className="text-lg font-semibold text-gray-700">👤 Dados do Tutor (Adotante)</h3>

        {/* Seção do Tutor */}
        <div className="grid grid-cols-1 gap-4">
          <input name="nome_tutor" placeholder="Nome Completo do Tutor" className="p-2 border rounded" onChange={handleChange} value={formData.nome_tutor} required />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="telefone" placeholder="WhatsApp / Telefone" className="p-2 border rounded" onChange={handleChange} value={formData.telefone} />
            <input name="email" type="email" placeholder="E-mail" className="p-2 border rounded" onChange={handleChange} value={formData.email} />
          </div>
          <textarea name="endereco" placeholder="Endereço Completo" className="p-2 border rounded h-20" onChange={handleChange} value={formData.endereco}></textarea>
        </div>

        <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 rounded hover:bg-green-700 transition duration-300">
          Confirmar Adoção 🏠
        </button>
      </form>
    </div>
  );
};

export default CadastroAdotados;