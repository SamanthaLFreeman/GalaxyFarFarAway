import React from 'react';
import './Card.scss';

const Card = () => {
  return (
    <article className='card'>
      <h2 className='name'>Card</h2>
      <p className='homeworld'></p>
      <p className='species'></p>
      <p className='pop'></p>
      <button className='fav-btn'>Fav</button>
    </article>
  )
}

export default Card;