import React, { useEffect, useState } from "react";
import CartoonCards from "./CartoonCards";

const Cartoon = () => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCartoonCards = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character?page=7"
        );
        const data = await response.json();
        setCards(data.results);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    getCartoonCards();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="container">
      <h1>The Rick and Morty API</h1>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        cards.map((item) => {
          return <CartoonCards key={item.id} {...item} />;
        })
      )}
    </div>
  );
};

export default Cartoon;
