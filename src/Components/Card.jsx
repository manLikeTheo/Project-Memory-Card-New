import React from "react";

const Card = ({ card, handleChoice, flipped }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img
          className="front w-64 h-64 p-2 rounded-lg object-cover"
          src={card.image}
          alt={"card-front"}
        />

        <img
          className="back w-64 h-64 p-2 rounded-lg object-cover"
          onClick={handleClick}
          src={"/luke-chesser-eICUFSeirc0-unsplash.jpg"}
          alt="card-back"
        />
      </div>
    </div>
  );
};

export default Card;
