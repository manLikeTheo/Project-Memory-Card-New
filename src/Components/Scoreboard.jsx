import React from "react";

const Scoreboard = ({ score, bestScore }) => {
  return (
    <div className="flex justify-center gap-4">
      <p className="text-2xl font-semibold text-white">
        Current Score: {score}
      </p>
      <p className="text-2xl font-semibold text-white">
        Best Score: {bestScore}
      </p>
    </div>
  );
};

export default Scoreboard;
