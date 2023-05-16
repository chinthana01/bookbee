import React, { useState, useEffect, useRef } from "react";
import BookGrid from "./BookGrid";
import "./BookSearch.css";
import _ from "lodash";

function BookSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const debounceSearchTerm = _.debounce(() => {
      setDebouncedSearchTerm(inputRef.current.value);
    }, 500);

    inputRef.current.addEventListener("input", debounceSearchTerm);

    return () => {
      inputRef.current.removeEventListener("input", debounceSearchTerm);
    };
  }, []);

  useEffect(() => {
    setSearchTerm(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div className="book-search">
      <h1 className="header">Book Search</h1>
      <input
        type="text"
        placeholder="Search for books"
        ref={inputRef}
      />
      <BookGrid searchTerm={searchTerm} />
    </div>
  );
}

export default BookSearch;

