import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">Guardião Pet SP</Link>
        
        <div className="flex gap-6">
          <Link to="/" className="hover:text-blue-200 transition">Início</Link>
          <Link to="/cadastro" className="hover:text-blue-200 transition">Cadastrar Pet</Link>
          <Link to="/adotados" className="hover:text-blue-200 transition">Pets Adotados</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;