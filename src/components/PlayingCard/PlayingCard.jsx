import React from 'react'
import Cards from './CardData'
import { Figure } from 'react-bootstrap';
import Card from './Card/Card'
export const PlayingCard = () => {
  console.log(Cards);
  return (
    <Figure>
      {Cards.map((item,index) => (
        <Card card={item} key={index}/>
      ))}
    </Figure>
  )
}
