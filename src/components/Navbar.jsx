import { Link } from 'react-router-dom'; // Importante para a navegação funcionar

function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '1rem 2rem', 
      background: '#2c3e50', 
      color: 'white',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>🐾 Guardião Pet Brasil</Link>
      </div>
      
      <ul style={{ 
        display: 'flex', 
        listStyle: 'none', 
        gap: '20px', 
        margin: 0, 
        padding: 0 
      }}>
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Início</Link>
        </li>
        <li>
          <Link to="/cadastro" style={{ color: 'white', textDecoration: 'none' }}>Cadastrar</Link>
        </li>
        <li style={{ cursor: 'pointer' }}>Sobre</li>
      </ul>
    </nav>
  );
}

export default Navbar;