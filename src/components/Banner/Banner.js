import React from "react";

function Banner({ numGuesses, userWon, answer }) {
  const happyContent = (
    <>
      {" "}
      <strong>Congratulations!</strong> Got it in
      <strong> {numGuesses} guesses</strong>.
    </>
  );

  const sadContent = (
    <>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </>
  );

  return (
    <div className={`${userWon ? "happy" : "sad"} banner`}>
      <p>{userWon ? happyContent : sadContent}</p>
    </div>
  );
}

export default Banner;
