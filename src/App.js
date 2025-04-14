// src/App.js
import React, { useState, useEffect } from "react";
import AddFlashcardForm from "./components/AddFlashcardForm";
import FlashcardList from "./components/FlashcardList";
import { getCards, saveCards } from "./utils/storage";

function App() {
  const [cards, setCards] = useState(() => getCards());

  useEffect(() => {
    saveCards(cards);
  }, [cards]);

  const handleAdd = (newCard) => {
    const newCards = [...cards, { id: Date.now(), ...newCard }];
    setCards(newCards);
  };

  const handleDelete = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>📚 Flashcard App</h1>
      <AddFlashcardForm onAdd={handleAdd} />
      <FlashcardList cards={cards} onDelete={handleDelete} />
    </div>
  );
}

export default App;
