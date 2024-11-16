import React from 'react'

const Filter = ({onTitleChange, onRatingChange }) => {
  return (
    <div style={{marginBottom: "20px"}}>
      <input
      type="text"
      placeholder ='Filter by title'
      onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
      type="number"
      placeholder='Filter by rating'
      onChange={(e) => onRatingChange(Number(e.target.value))}
      style={{marginLeft: '10px'}}
      />
    </div>
  )
}

export default Filter