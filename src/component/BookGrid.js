
import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import AudioPlayer from "./AudioPlayer";
import InfiniteScroll from "react-infinite-scroll-component";
import "./BookGrid.css";

function BookGrid({ searchTerm }) {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [bookContent, setBookContent] = useState(null);

  useEffect(() => {
    setBooks([]);
    setPage(1);
    // setHasMore(false);
  }, [searchTerm]);

  useEffect(() => {
    const fetchBooks = async () => {
      let url = "";
      const itemsPerPage = 32; // Number of books to display per page
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      
      if (searchTerm.trim() !== "") {
        url = `https://gutendex.com/books?search=${searchTerm}&start_index=${startIndex}&end_index=${endIndex}`;
      } else {
        url = `https://gutendex.com/books?start_index=${startIndex}&end_index=${endIndex}`;
      }
      
      const response = await fetch(url);
      const data = await response.json();
      if (page === 1) {
        setBooks(data.results);
      } else {
        setBooks((prevBooks) => [...prevBooks, ...data.results]);
      }
      setHasMore(data.results.length > 0);
    };

    fetchBooks();
  }, [searchTerm, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleBookClick = (url) => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        setBookContent(data);
      })
      .catch((error) => console.log(error));
  };

  const handleBackToBookGrid = () => {
    setBookContent(null);
  };

  return (
    <>
      {bookContent ? (
        <div className="book-content">
          <button onClick={handleBackToBookGrid}>Back to book grid</button>
          <pre>{bookContent}</pre>
        </div>
      ) : (
        <InfiniteScroll
          dataLength={books.length}
          next={handleLoadMore}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <ul className="book-grid">
            {books.map((book) => (
              <li key={book.id} className="book-card">
                <BookCard book={book} handleBookClick={handleBookClick} />
              </li>
            ))}
          </ul>
        </InfiniteScroll>
      )}
    </>
  );
}

export default BookGrid;
