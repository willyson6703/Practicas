import { useState, useEffect } from "react";

function NewCuriosity() {
  const [curiosity, setCuriosity] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then(response => response.json())
      .then(data => {
        setCuriosity(data.fact);
        setLoading(false);

        const firstWord = data.fact.split(" ")[0].replace(/[^a-zA-Z]/g, "");
        setImageUrl(`https://cataas.com/cat/says/${encodeURIComponent(firstWord)}?size=30&color=white`);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const saveCuriosity = () => {
    if (!curiosity || !imageUrl) return;
    const savedCuriosities = JSON.parse(localStorage.getItem("curiosities")) || [];
    savedCuriosities.push({ curiosity, imageUrl });
    localStorage.setItem("curiosities", JSON.stringify(savedCuriosities));
    alert("Curiosidad guardada.");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(curiosity);
    alert("Curiosidad copiada al portapapeles!");
  };

  return (
    <div className="p-10 flex flex-col items-center bg-gray-100 min-h-screen">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Nueva Curiosidad</h1>
        {loading ? <p>Cargando curiosidad...</p> : error ? <p>Error al cargar la curiosidad.</p> : (
          <>
            <p className="mt-4 text-gray-600">{curiosity}</p>
            <div className="flex justify-center mt-4">
              <img src={imageUrl} alt="Gato" className="w-40 h-40 rounded-lg shadow-md" />
            </div>
            <div className="flex justify-center mt-4 gap-4">
              <button onClick={saveCuriosity} className="bg-green-500 text-white px-6 py-2 rounded shadow hover:bg-green-600">
                Guardar Curiosidad
              </button>
              <button onClick={copyToClipboard} className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600">
                Copiar al portapapeles
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default NewCuriosity;






