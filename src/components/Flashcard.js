import React, { useState } from "react";

const Flashcard = ({ card, onDelete }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "10px",
        cursor: "pointer",
        borderRadius: "8px",
        backgroundColor: "#fffbe6",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        width: "300px"
      }}
    >
      <h3>{flipped ? card.answer : card.question}</h3>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(card.id);
        }}
        style={{
          marginTop: "10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "5px 10px",
          cursor: "pointer"
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Flashcard;
