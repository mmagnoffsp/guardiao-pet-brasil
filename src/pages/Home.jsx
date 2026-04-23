import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Guardião Pet SP 🐾
      </h1>
      <p className="text-gray-600 text-xl mb-8">
        Painel Administrativo de Adoções
      </p>
      
      <div className="flex gap-4">
        <Link 
          to="/adotados" 
          className="bg-purple-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-purple-700 transition shadow-lg"
        >
          Registrar Adoção 🏠
        </Link>
        <Link 
          to="/cadastro" 
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg"
        >
          Cadastrar Novo Pet 🐶
        </Link>
      </div>
    </div>
  );
};

export default Home;