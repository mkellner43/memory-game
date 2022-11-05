import React from "react";

export default function Header(props) {
  return (
      <header className="header-wrapper">
        <div>
          <h1>Memory Game</h1>
          <h4>Get points by clicking on an image but don't click on any more than once!</h4>
        </div>
        <div>
          <h1>Score:{props.score}</h1>
          <h1>High Score:{props.highScore}</h1>
        </div>
      </header>
  )
}