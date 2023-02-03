import React, { useState } from "react";
import Card from "./Card";

export default function Cards(props) {
  const [idMemory, setIdMemory] = useState([])
  const cards = []
  let shuffledCards = []
  const names = [
    'Anne', 'Croaker', 'Grime', 'Hoppop',
    'Loggle', 'Maddie', 'Polly', 'Sasha',
    'Sprig', 'Sylvia', 'Toadstool', 'Wally'
  ]
  const images = [
    '/anne.jpg','/croaker.png','/grime.png',
    '/hoppop.png','/loggle.png','/maddie.jpg',
    '/polly.png','/sasha.jpg','/sprig.png',
    '/sylvia.png','/toadstool.jpg','/wally.png'
  ]

  for(let i=0; i < 12; i++){
    let card = <Card 
                className='card' 
                key={i}
                name={names[i]}
                img={images[i]}
                resetScore={props.resetScore}
                updateScore={props.updateScore}
                updateHighScore={props.updateHighScore}
                checkMemory={checkMemory}
    />
    cards.push(card)
    shuffledCards = cards.sort(() =>  Math.random() - 0.5 );
  }

  function checkMemory(e) {
    let id = e.target.id || e.target.parentElement.id
    if(!idMemory.includes(id)){
      setIdMemory(prevState => {
        return [...prevState, id]
      })
      props.updateScore()
    } else {
      setIdMemory([])
      props.updateHighScore()
    }
  }

  return (
    <section className="cards-section">
      <section className="cards-wrapper">
       {shuffledCards}
      </section>
    </section>
  )
}