// src/components/Book.js
//import React from 'react';

const book = ({ image,title, yr,author,genre }) => {
    return (
      <div className="book">
        <img  src={image} alt="" />
        <h3>{title}</h3>
        <p>{yr}</p>
        <p> {author}</p>
        <p>{genre}</p>
      </div>
    );
  };
  
  export default book;
  
  