import movies from "./mockdata/movies"
import MovieCard from "./MovieCard"

const MovieList = () => {
  return (
    <div className="card" style={{display: "flex"}}>
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
    </div>
  )
}

export default MovieList