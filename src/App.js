import React, {useState} from 'react'
import './App.css';
import ButtonList from './components/ButtonList'
import Word from './components/WordList'
import WordLetters from './components/WordLetters'
import ShowNotification from './components/ShowNotification'
import Popup from './components/Popup'
import Figure from './components/Figure'

function App({maxLives=6}) {
  const [userLives, setUserLives] = useState(maxLives)
  const [guessedLetters, setGuessedLetters] = useState([])
  const [correctLetters, setCorrectLetters] = useState([])
  const [word, setWord] = useState(Word())
  const [showNotification, setShowNotification] = useState(false)

  const handleGuess = e => {
    setShowNotification(false)
    let letter = e.target.value;
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters(currentLetters => [...currentLetters, letter])
      if (word.toUpperCase().includes(letter)) {
        setCorrectLetters(currentLetters => [...currentLetters, letter])
      } else {
          setUserLives(currentLive => currentLive - 1)
      }
    } else {
      setShowNotification(true)
    }
  }

  const playAgain = () => {
    setUserLives(maxLives)
    setGuessedLetters([])
    setCorrectLetters([])
    setWord(Word())
  }

  return (
    <div>
      <h1>Hangman</h1>
      <div className='middle'>
        {/* <Images lives={userLives}/> */}
        <Figure lives={userLives} />
        <div className='rightside'>
          <div>
            <h3>Lives remaining:</h3>
            <h2>{userLives}</h2>
          </div>
          <div>
            <h3>Letters used:</h3>
            <div className='usedbuttons'>
              {guessedLetters.map((letter, i) => {
                return (
                  <span key={i} className='button'>{letter}</span>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <h1><WordLetters word={word} correctLetters={correctLetters}/></h1>
      <ButtonList OnClick={handleGuess}/>
      <ShowNotification showNotification={showNotification}/>
      <Popup word={word} correctLetters={correctLetters} lives={userLives} playAgain={playAgain} />
    </div>
  );
}

export default App;
