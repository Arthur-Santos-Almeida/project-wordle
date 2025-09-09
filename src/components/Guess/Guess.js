import React from "react";

import { range } from "../../utils";

import { checkGuess } from "../../game-helpers.js";

function Guess({ answer, word }) {
  function getLetter(index) {
    return word ? word.split("")[index] : null;
  }

  return (
    <p className="guess">
      {range(5).map((index) => {
        //console.log(word ? checkGuess(word, answer)[index].status : '');

        const guessStatusClass = word
          ? checkGuess(word, answer)[index].status
          : null;

        return (
          <span key={index} className={`cell ${guessStatusClass}`}>
            {getLetter(index)}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
