import React from 'react';

const Popup = ({word, correctLetters, lives, playAgain}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';

  if(word.length === correctLetters.length) {
    finalMessage = 'Congratulations! You won!';
  } else if(lives === 0) {
    finalMessage = 'Unfortunately you lost.';
    finalMessageRevealWord = `The word was: ${word}`;
  }

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup