const STORAGE_KEY = "flashcards";

export const getCards = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveCards = (cards) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
};
