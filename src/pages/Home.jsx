import { useNavigate } from 'react-router-dom'; // 1. Importação necessária

function Home() {
  const navigate = useNavigate(); // 2. Inicialização do hook de navegação

  return (
    <main style={{ 
      padding: '4rem 2rem', 
      textAlign: 'center', 
      fontFamily: 'sans-serif',
      backgroundColor: '#f9f9f9',
      minHeight: '60vh'
    }}>
      <h1 style={{ color: '#2c3e50', fontSize: '2.5rem' }}>
        🐾 Bem-vindo ao Guardião Pet Brasil
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#7f8c8d', marginBottom: '2rem' }}>
        Nossa missão é conectar protetores e transformar a vida dos animais.
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <button style={{ 
          backgroundColor: '#27ae60', 
          color: 'white', 
          border: 'none', 
          padding: '12px 25px', 
          borderRadius: '8px', 
          fontSize: '1rem',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Quero Adotar
        </button>
        
        {/* 3. Adicionamos o evento onClick para navegar até a rota /cadastro */}
        <button 
          onClick={() => navigate('/cadastro')}
          style={{ 
            backgroundColor: '#e67e22', 
            color: 'white', 
            border: 'none', 
            padding: '12px 25px', 
            borderRadius: '8px', 
            fontSize: '1rem',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Cadastrar Pet
        </button>
      </div>
    </main>
  );
}

export default Home;