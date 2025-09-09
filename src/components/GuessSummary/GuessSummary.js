import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

import Guess from "../Guess";

function GuessSummary({ answer, guessList }) {
  function getGuess(index) {
    return guessList[index] ?? null;
  }

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        return (
          <Guess answer={answer} key={index} word={getGuess(index)}></Guess>
        );
      })}
    </div>
  );
}

export default GuessSummary;
