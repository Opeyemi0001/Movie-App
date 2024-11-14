const MovieCard = ({title, description, posterURL, rating}) => {
  
  MovieCard.defaultProps = {
    title: "Unknown title",
    description: "No description provided",
    posterURL: "https://via.placeholder.com/150",
    rating: 0,
  }

  return (
    <div className="movie-card" style={{width: "16rem", margin: "0.5rem", border: "2px solid black"}}>
      <img src={posterURL} alt={title} style={{width: "11rem"}} />
      <h2>title: {title}</h2>
      <p style={{padding: "0 0.2rem"}}> <strong>Description:</strong>  {description}</p>
      <p> <strong>Rating:</strong> {rating}</p>
    </div>
  )
}

export default MovieCard;