import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white flex justify-between p-4 shadow-lg">
      <Link to="/" className="font-bold hover:underline">Inicio</Link>
      <Link to="/my-curiosities" className="font-bold hover:underline">Mis Curiosidades</Link>
    </nav>
  );
}

export default Navbar;



