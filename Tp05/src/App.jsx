import { useState } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [noResults, setNoResults] = useState(false);

  const API = "228586c1";

  const buscar = async (texto) => {
    if (texto.trim() === "") return;

    setLoading(true);
    setError("");
    setNoResults(false);

    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${API}&s=${texto}`
      );

      if (res.data.Response === "False") {
        setMovies([]);
        setNoResults(true);
      } else {
        setMovies(res.data.Search);
      }
    } catch {
      setError("Error al buscar");
    }

    setLoading(false);
  };

  const verDetalle = async (id) => {
    setLoading(true);

    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${API}&i=${id}`
      );

      setSelected(res.data);
    } catch {
      setError("Error al cargar detalle");
    }

    setLoading(false);
  };

  return (
    <div className="app">
      <h1 className="title">Buscador de Películas</h1>

      <SearchBar onSearch={buscar} />

      {loading && <p className="info">Cargando...</p>}
      {error && <p className="error">{error}</p>}
      {noResults && <p className="info">No hay resultados</p>}

      {!selected && (
        <MovieList movies={movies} onSelect={verDetalle} />
      )}

      {selected && (
        <MovieDetail
          movie={selected}
          onBack={() => setSelected(null)}
        />
      )}
    </div>
  );
}

export default App;