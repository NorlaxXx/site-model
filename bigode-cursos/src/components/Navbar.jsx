import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Bigode Cursos</h1>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/cursos">Cursos</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
