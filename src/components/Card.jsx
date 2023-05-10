import React from 'react'

export default function Card(props) {
  return (
    <div>
          <h1>{props.Tittle}</h1>
          <img src= {props.image} width={200} height={150}/>
          <p>{props.description}</p>
    </div>
  )
}