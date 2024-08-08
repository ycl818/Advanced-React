import React from "react";

const LargeAuthorListItem = ({ author }) => {
  const { name, age, country, books } = author;
  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <h2>Books:</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </>
  );
};

export default LargeAuthorListItem;
