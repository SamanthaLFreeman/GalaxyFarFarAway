import React from 'react';
import './Card.scss';

const Card = ({card}) => {
  return (
    <article className='card'>
      <h2 className='name'>{card.name}</h2>
      <p className='homeworld'>{card.homeworld}</p>
      <p className='species'>{card.species}</p>
      <p className='pop'>{card.population}</p>
      <button className='fav-btn'>Fav</button>
    </article>
  )
}

export default Card;