import React from 'react'
import './App.css';
import ButtonList from './components/ButtonList'
import Images from './components/Images'

function App() {
  return (
    <div>
      <h1>Hangman</h1>
      <div className='middle'>
        <Images lives='0'/>
        <div className='righside'>
          <div>
            <h3>Lives remaining:</h3>
            <h2>10</h2>
          </div>
          <div>
            <h3>Letters used:</h3>
            <ul>
              <li>A</li>
            </ul>
          </div>
        </div>
      </div>
      <ButtonList />
    </div>
  );
}

export default App;
