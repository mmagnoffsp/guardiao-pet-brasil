// src/styles/theme.js

export const s = {
  // Container principal (Heurística: Design Estético e Minimalista)
  container: { 
    maxWidth: '500px', 
    margin: '0 auto', 
    padding: '20px', 
    fontFamily: '"Inter", system-ui, sans-serif',
    color: '#1a202c'
  },

  // Cabeçalho
  header: { textAlign: 'center', marginBottom: '30px' },

  // Barra de Abas (Heurística: Flexibilidade e Eficiência)
  tabBar: { 
    display: 'flex', 
    gap: '8px', 
    overflowX: 'auto', 
    marginBottom: '20px', 
    paddingBottom: '10px' 
  },

  // Estilo dinâmico das abas
  tab: (active) => ({
    padding: '12px 20px',
    borderRadius: '14px',
    border: 'none',
    backgroundColor: active ? '#ff6600' : '#f1f5f9',
    color: active ? '#fff' : '#64748b',
    fontWeight: '700',
    fontSize: '14px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: '0.2s ease',
    whiteSpace: 'nowrap'
  }),

  // Cards das Fichas
  card: { 
    backgroundColor: '#fff', 
    borderRadius: '24px', 
    padding: '24px', 
    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
    border: '1px solid #f1f5f9'
  },

  // Labels e Inputs (Heurística: Prevenção de Erros)
  label: { 
    display: 'block', 
    fontSize: '11px', 
    fontWeight: '800', 
    color: '#94a3b8', 
    marginBottom: '6px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  
  input: { 
    width: '100%', 
    padding: '14px', 
    borderRadius: '12px', 
    border: '1px solid #e2e8f0', 
    fontSize: '15px', 
    backgroundColor: '#f8fafc',
    marginBottom: '16px',
    boxSizing: 'border-box',
    outline: 'none'
  },

  // Botão Principal (Ação Clara)
  btnPrimary: { 
    width: '100%', 
    padding: '16px', 
    backgroundColor: '#ff6600', 
    color: '#fff', 
    border: 'none', 
    borderRadius: '16px', 
    fontWeight: '800', 
    fontSize: '16px', 
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    boxShadow: '0 8px 20px rgba(255,102,0,0.2)'
  }
};