import React from "react";

function TextInput({ labelContent, guess, setGuess }) {
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          console.log(guess.toUpperCase());
          setGuess("");
        }}
      >
        <label htmlFor="guess-input">{labelContent}</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={(event) => setGuess(event.target.value)}
          pattern="\w{5}"
        ></input>
      </form>
    </>
  );
}

export default TextInput;
