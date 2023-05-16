// import React from "react";
// import AudioPlayer from "./AudioPlayer";
// import "./BookCard.css";

// function BookCard({ book, handleBookClick }) {
//   const truncatedTitle =
//     book.title.length > 40 ? book.title.slice(0, 40) + "..." : book.title;

//   const openBookContent = () => {
//     console.log("book clicked:", book);
//     if (book.formats && book.formats["text/plain"]) {
//       console.log("text/plain format found");
//       handleBookClick(book.formats["text/plain"]);
//     } else {
//       console.log("text/plain format not found");
//     }
//   };

//   return (
//     <div className="book-card">
//       <div className="book-image" onClick={openBookContent}>
//         <img
//           src={book.formats && book.formats["image/jpeg"]}
//           alt={`Cover for ${book.title}`}
//         />
//       </div>
//       <div className="book-info">
//         <h2 title={book.title} onClick={openBookContent}>
//           {truncatedTitle}
//         </h2>
//         <p>{book.authors.map((author) => author.name).join(", ")}</p>
//         <p>Downloads: {book.download_count}</p>
//         {book.formats && book.formats["text/plain"] && (
//           <a href={book.formats["text/plain"]}>Download Text</a>
//         )}
//         {book.formats && book.formats["audio/mpeg"] && (
//           <AudioPlayer audio={book.formats["audio/mpeg"]} />
//         )}
//       </div>
//     </div>
//   );
// }

// export default BookCard;


import React from "react";
import AudioPlayer from "./AudioPlayer";
import "./BookCard.css";

function BookCard({ book, handleBookClick }) {
  const truncatedTitle =
    book.title.length > 40 ? book.title.slice(0, 40) + "..." : book.title;

  const openBookContent = () => {
    console.log("book clicked:", book);
    if (book.formats && book.formats["text/plain"]) {
      console.log("text/plain format found");
      handleBookClick(book.formats["text/plain"]);
    } else {
      console.log("text/plain format not found");
    }
  };

  return (
    <div className="book-card">
      <div className="book-image" onClick={openBookContent}>
        <img
          src={book.formats && book.formats["image/jpeg"]}
          alt={`Cover for ${book.title}`}
        />
      </div>
      <div className="book-info">
        <h2 title={book.title} onClick={openBookContent}>
          {truncatedTitle}
        </h2>
        <p>{book.authors.map((author) => author.name).join(", ")}</p>
        <p>Downloads: {book.download_count}</p>
        {book.formats && book.formats["text/plain"] && (
          <a href={book.formats["text/plain"]}>Download Text</a>
        )}
        {book.formats && book.formats["audio/mpeg"] && (
          <AudioPlayer src={book.formats["audio/mpeg"]} /> // Update prop name from "audio" to "src"
        )}
      </div>
    </div>
  );
}

export default BookCard;
