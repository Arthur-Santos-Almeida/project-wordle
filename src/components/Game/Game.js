import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import TextInput from "../TextInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");

  return (
    <TextInput
      guess={guess}
      setGuess={setGuess}
      labelContent={"Enter guess:"}
    ></TextInput>
  );
}

export default Game;
