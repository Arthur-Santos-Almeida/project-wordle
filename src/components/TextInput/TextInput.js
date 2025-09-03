import React from "react";

function TextInput({ labelContent, guess, setGuess, guesses, setGuesses }) {
  function handleSubmit(event) {
    event.preventDefault();

    setGuesses([...guesses, guess]);
    setGuess("");
  }

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => handleSubmit(event)}
      >
        <label htmlFor="guess-input">{labelContent}</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setGuess(nextGuess);
          }}
          pattern="\w{5}"
          title="Please enter a 5-letter word"
        ></input>
      </form>
    </>
  );
}

export default TextInput;
