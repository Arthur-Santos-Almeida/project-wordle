import React from "react";

import { range } from "/src/utils";

function Guess({ word }) {
  function getLetter(index) {
    return word ? Array.from(word)[index] : null;
  }

  return (
    <p className="guess">
      {range(5).map((index) => (
        <span key={index} className="cell">
          {getLetter(index)}
        </span>
      ))}
    </p>
  );
}

export default Guess;
