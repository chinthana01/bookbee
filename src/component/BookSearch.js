import React, { useState } from "react";
import BookGrid from "./BookGrid";
import './BookSearch.css';

function BookSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="book-search">
      <h1 className="header">Book Search</h1>
      <input
        type="text"
        placeholder="Search for books"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <BookGrid searchTerm={searchTerm} />
    </div>
  );
}

export default BookSearch;
