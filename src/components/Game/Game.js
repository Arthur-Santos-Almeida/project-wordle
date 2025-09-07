import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import TextInput from "../TextInput";
import GuessSummary from "../GuessSummary";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  return (
    <>
      <GuessSummary guessList={guessList}></GuessSummary>
      <TextInput
        guessList={guessList}
        setGuessList={setGuessList}
        labelContent={"Enter guess:"}
      ></TextInput>
    </>
  );
}

export default Game;
