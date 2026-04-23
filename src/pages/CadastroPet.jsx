import React from 'react';

function CadastroPet() {
  return (
    <main style={{ 
      padding: '4rem 2rem', 
      fontFamily: 'Segoe UI, Roboto, sans-serif', 
      textAlign: 'center',
      backgroundColor: '#f0f2f5', // Fundo da tela suave (Heurística #8)
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }}>
      <div style={{ 
        maxWidth: '500px', 
        width: '100%',
        backgroundColor: '#ffffff', // Card branco limpo
        padding: '40px', 
        borderRadius: '16px', 
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)' 
      }}>
        <h1 style={{ color: '#2c3e50', marginBottom: '8px', fontSize: '1.8rem' }}>
          📝 Cadastro de Pet
        </h1>
        <p style={{ color: '#636e72', marginBottom: '32px', fontSize: '1rem' }}>
          Insira as informações de forma clara para facilitar a adoção.
        </p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Heurística #2: Linguagem simples e rótulos claros */}
          <div style={{ textAlign: 'left' }}>
            <label style={labelStyle}>Nome do animal</label>
            <input 
              style={inputStyle} 
              type="text" 
              placeholder="Ex: Amigão" 
              required
            />
          </div>

          <div style={{ textAlign: 'left' }}>
            <label style={labelStyle}>Espécie</label>
            <input 
              style={inputStyle} 
              type="text" 
              placeholder="Ex: Cachorro, Gato..." 
              required
            />
          </div>

          <div style={{ textAlign: 'left' }}>
            <label style={labelStyle}>História ou Descrição</label>
            <textarea 
              style={inputStyle} 
              placeholder="Descreva o temperamento e como ele foi resgatado..." 
              rows="5" 
              required
            />
          </div>

          {/* Heurística #4: Consistência visual com o restante do site */}
          <button 
            type="submit"
            style={{ 
              backgroundColor: '#27ae60', 
              color: 'white', 
              border: 'none', 
              padding: '16px', 
              borderRadius: '10px', 
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background 0.2s',
              marginTop: '10px'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#219150'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#27ae60'}
          >
            Finalizar Cadastro
          </button>
        </form>
      </div>
    </main>
  );
}

// Estilos de suporte para manter o código limpo
const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  color: '#2d3436',
  fontWeight: '600',
  fontSize: '0.95rem'
};

const inputStyle = {
  width: '100%',
  padding: '14px',
  borderRadius: '10px',
  border: '1px solid #dfe6e9', // Borda muito sutil (Heurística #8)
  backgroundColor: '#ffffff',   // Garante fundo branco puro
  fontSize: '1rem',
  color: '#2d3436',           // Texto legível
  boxSizing: 'border-box',    // Garante que o input não escape do card
  outlineColor: '#27ae60',    // Heurística #1: Feedback visual de foco
  transition: 'all 0.2s'
};

export default CadastroPet;