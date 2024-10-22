import React from "react";
import Tilt from "react-parallax-tilt";
const Card = ({ card, handleChoice, flipped }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card perspective">
      <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        glareEnable
        glareMaxOpacity={0.5}
      >
        <div
          className={`relative w-64 h-64  transition-transform duration-500  ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          <div className="absolute w-full h-full backface-hidden rounded-lg cursor-pointer">
            <img
              className="front w-64 h-64 p-2 rounded-lg object-cover"
              src={card.image}
              alt={"card-front"}
              onClick={handleClick}
            />
          </div>

          <div className="absolute w-64 h-64 backface-hidden rounded-lg rotate-y-180">
            <img
              className="back w-full h-full p-2 rounded-lg object-cover"
              src={"/luke-chesser-eICUFSeirc0-unsplash.jpg"}
              alt="card-back"
            />
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Card;
