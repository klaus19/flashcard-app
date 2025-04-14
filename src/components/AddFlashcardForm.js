import React, { useState } from "react";

const AddFlashcardForm = ({ onAdd }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim() === "" || answer.trim() === "") return;
    onAdd({ question, answer });
    setQuestion("");
    setAnswer("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        placeholder="Enter question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        placeholder="Enter answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button type="submit">Add Flashcard</button>
    </form>
  );
};

export default AddFlashcardForm;
