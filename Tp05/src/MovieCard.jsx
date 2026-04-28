function MovieCard({ movie, onSelect }) {
  return (
    <div
      className="movie-card"
      onClick={() => onSelect(movie.imdbID)}
    >
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/100"
        }
        alt={movie.Title}
      />
      <p className="movie-title">{movie.Title}</p>
      <p>{movie.Year}</p>
      <p>{movie.Type}</p>
    </div>
  );
}

export default MovieCard;