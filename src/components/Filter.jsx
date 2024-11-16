import { useState } from "react";

const Filter = ({ onApplyFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit =(e) => {
    e.preventDefault();
    onApplyFilter({title, rating}); //passes the filter criteria to the parent
  }
  return (
    <div style={{ marginBottom: "20px" }}>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Filter by title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder='Filter by rating'
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          style={{ marginLeft: '10px' }}
          min="0"
          max="10"
          step="0.1"
        />
        <button type="submit" style={{marginLeft: "10px"}}>Apply Filters</button>
      </form>
    </div>
  );
};

export default Filter