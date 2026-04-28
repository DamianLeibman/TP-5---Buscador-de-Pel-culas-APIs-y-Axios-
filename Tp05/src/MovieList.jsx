import MovieCard from "./MovieCard";

function MovieList({ movies, onSelect }) {
  return (
    <div className="movie-list">
      {movies.map((m) => (
        <MovieCard key={m.imdbID} movie={m} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default MovieList;