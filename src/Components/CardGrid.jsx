import React from "react";
import Card from "./Card";
const CardGrid = ({ cards, onCardClick, firstPick, secondPick }) => {
  return (
    <div className="grid grid-cols-4 gap-4 shadow-2xl p-5">
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
