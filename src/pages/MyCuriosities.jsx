import { useState, useEffect } from "react";

function MyCuriosities() {
  const [curiosities, setCuriosities] = useState([]);
  const [selectedCuriosity, setSelectedCuriosity] = useState(null);

  useEffect(() => {
    const savedCuriosities = JSON.parse(localStorage.getItem("curiosities")) || [];
    setCuriosities(savedCuriosities);
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Mis Curiosidades Guardadas</h1>
      {curiosities.length === 0 ? (
        <p className="mt-4 text-center">Aún no has guardado ninguna curiosidad.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curiosities.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt="Curiosidad de Gato"
                  className="rounded-lg w-32 h-32 object-cover cursor-pointer shadow-md"
                  onClick={() => setSelectedCuriosity(item)}
                />
              )}
              <p className="mt-4 text-gray-600 text-center">{item.curiosity}</p>
            </div>
          ))}
        </div>
      )}

      {selectedCuriosity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h2 className="text-xl font-bold mb-2">Curiosidad de Gato</h2>
            <p>{selectedCuriosity.curiosity}</p>
            <button onClick={() => setSelectedCuriosity(null)} className="mt-4 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyCuriosities;




