import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center p-10 bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold">Bienvenido a Curiosidades de Gatos</h1>
        <p className="mt-4 text-gray-600">Descubre datos fascinantes sobre los gatos.</p>
        <Link to="/new-curiosity" className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600">
          Ver una curiosidad
        </Link>
      </div>
    </div>
  );
}

export default Home;



