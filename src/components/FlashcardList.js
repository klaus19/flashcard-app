import React from "react";
import Flashcard from "./Flashcard";

const FlashcardList = ({ cards, onDelete }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
      {cards.map((card) => (
        <Flashcard key={card.id} card={card} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default FlashcardList;
