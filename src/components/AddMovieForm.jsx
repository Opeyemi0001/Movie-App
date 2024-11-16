import { useState } from "react"

const AddMovieForm = ({onAddMovie}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {title, 
      description, 
      posterURL, 
      rating: parseFloat(rating) // Convert the rating to a number
     };
    onAddMovie(newMovie); //Passes the new movie object to the parent component
    // Reset form fields
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(0);
  }
  return (
    <div>
       <form onSubmit={handleSubmit} style={{marginBottom: "20px"}}>
        <input 
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        />

        <input 
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        />

        <input 
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        required
        />

        <input 
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
        min="0"
        max="10"
        step="0.1"
        />
        <button type="submit">Add Movie</button>
       </form>
    </div>
  )
}

export default AddMovieForm