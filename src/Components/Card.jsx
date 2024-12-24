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
          className={`relative w-[150px] h-[150px] p-3  transition-transform duration-500  ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          <div className="absolute   backface-hidden rounded-lg cursor-pointer">
            <img
              className="front w-[150px] h-[150px] p-1 rounded-lg object-cover"
              src={card.image}
              alt={"card-front"}
              onClick={handleClick}
            />
          </div>

          <div className="absolute w-48 h-48 backface-hidden rounded-lg rotate-y-180">
            <img
              className="back w-32 h-32 p-2 rounded-lg object-cover"
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
