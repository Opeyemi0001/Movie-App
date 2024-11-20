import { Link, useNavigate, useParams } from "react-router-dom";
import movies from "./mockdata/movies";

const MovieCard = ({ title, description, posterURL, rating, trailer}) => {

  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((movie) => movie.id === parseInt(id));

  if(!movie) return <p>Movie not found</p>

  MovieCard.defaultProps = {
    title: "Unknown title",
    description: "No description provided",
    posterURL: "https://via.placeholder.com/150",
    rating: 0,
    trailer: "trailer link not available",
  }

  return (
    <Link to="/"> <div className="movie-card" style={{width: "16rem", margin: "0.5rem", border: "2px solid black"}}>
      <img src={posterURL} alt={title} style={{width: "11rem"}} />
      <h2>Title: {title}</h2>
      <p style={{padding: "0 0.2rem"}}> <strong>Description:</strong>  {description}</p>
      <iframe
      width="560"
      height="315"
       src={trailer}
       title="Movie trailer"
       frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       allowFullScreen
       ></iframe>
      <p> <strong>Rating:</strong> {rating}</p>
      <button onClick={() => navigate("/")} >Back to Home</button>
    </div>
    </Link>
  )
}

export default MovieCard;