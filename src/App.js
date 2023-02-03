import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Cards from "./components/Cards";

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  function updateScore() {
    setScore(prevState => prevState + 1)
  }
/* get a winning score to show as high score and to alert the win */
  function resetScore() {
    setScore(0)
  }

  function updateHighScore() {
    if(score > highScore) {
      setHighScore(score)
    }
    setScore(0)
  }

  return (
    <div className="App">
      <Header 
        score={score}
        highScore={highScore}
      />
    <Cards 
      updateScore={updateScore}
      updateHighScore={updateHighScore}
      resetScore={resetScore}
      />
    </div>
  );
}

export default App;
