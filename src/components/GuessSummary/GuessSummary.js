import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "/src/constants";
import { range } from "/src/utils";

import Guess from "../Guess";

function GuessSummary({ guessList }) {
  function getGuess(index) {
    return guessList[index] ?? null;
  }

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        return <Guess key={index} word={getGuess(index)}></Guess>;
      })}
    </div>
  );
}

export default GuessSummary;
