function MovieDetail({ movie, onBack }) {
  return (
    <div className="movie-detail">
      <button className="back-button" onClick={onBack}>
        Volver
      </button>

      <h2>{movie.Title}</h2>

      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/150"
        }
        alt={movie.Title}
      />

      <p>Año: {movie.Year}</p>
      <p>Género: {movie.Genre}</p>
      <p>Director: {movie.Director}</p>
      <p>Actores: {movie.Actors}</p>
      <p>Sinopsis: {movie.Plot}</p>
      <p>Duración: {movie.Runtime}</p>
      <p>Idioma: {movie.Language}</p>
      <p>País: {movie.Country}</p>
      <p>IMDb: {movie.imdbRating}</p>
    </div>
  );
}

export default MovieDetail;