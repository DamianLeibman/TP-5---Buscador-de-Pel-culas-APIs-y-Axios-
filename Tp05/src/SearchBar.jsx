import { useState } from "react";

function SearchBar({ onSearch }) {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(texto);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        placeholder="Buscar películas..."
        onChange={(e) => setTexto(e.target.value)}
      />
      <button className="search-button" type="submit">
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;