import React from "react";
import TextInput from "../TextInput";
import GuessList from "../GuessList/GuessList";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guesses, setGuesses] = React.useState([]);

  return (
    <>
      <GuessList guesses={guesses}></GuessList>
      <TextInput
        guess={guess}
        setGuess={setGuess}
        guesses={guesses}
        setGuesses={setGuesses}
        labelContent={"Enter guess:"}
      ></TextInput>
    </>
  );
}

export default Game;
