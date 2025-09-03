import React from "react";

function GuessList({ guesses }) {
  return (
    <div className="guess-list">
      {guesses.map((guess) => (
        <p className="guess">{guess}</p>
      ))}
    </div>
  );
}

export default GuessList;
