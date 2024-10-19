import React from "react";
import Card from "./Card";
const CardGrid = ({ cards, onCardClick, firstPick, secondPick }) => {
  return (
    <div className="grid grid-cols-3 gap-4 justify-center items-center border-4 border-purple-300">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          handleChoice={onCardClick}
          flipped={card === firstPick || card === secondPick || card.matched}
        />
      ))}
    </div>
  );
};

export default CardGrid;
