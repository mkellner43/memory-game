import React, { useState } from "react";
import uniqid from 'uniqid'

export default function Card(props) {
  const [id, setId] = useState(uniqid())

  return(
    <section className="card-wrapper" id={id} onClick={props.checkMemory}>
      <img src={require(`../images${props.img}`)} alt='pic'></img>
      <h3>{props.name}</h3>
    </section>
  )
}