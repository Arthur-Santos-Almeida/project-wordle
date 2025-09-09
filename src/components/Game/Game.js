import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import TextInput from "../TextInput";
import GuessSummary from "../GuessSummary";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  let gameIsOver = false;
  let userWon = false;

  if (guessList.length >= 6) gameIsOver = true;

  const lastGuess = guessList.at(-1);
  if (lastGuess === answer) {
    gameIsOver = true;
    userWon = true;
  }

  return (
    <>
      <GuessSummary answer={answer} guessList={guessList}></GuessSummary>
      {!gameIsOver ? (
        <TextInput
          guessList={guessList}
          setGuessList={setGuessList}
          labelContent={"Enter guess:"}
        ></TextInput>
      ) : (
        <Banner
          numGuesses={guessList.length}
          userWon={userWon}
          answer={answer}
        ></Banner>
      )}
    </>
  );
}

export default Game;
