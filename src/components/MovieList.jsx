import { Link } from "react-router-dom"
import movies from "./mockdata/movies"
import MovieCard from "./MovieCard"

const MovieList = () => {
  return (
    <Link to="/" > <div  className="card" style={{display: "flex"}}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
    </Link>
  )
}

export default MovieList