import React from 'react';
import './Card.scss';

const Card = ({name, terrain, population, climate, residents, homeworld, species}) => {
  return (
    <article className='card'>
      { name && <h2 className='name'>{name}</h2>}
      { homeworld && <p className='homeworld'>{homeworld}</p>}
      { species && <p className='species'>{species}</p>}
      { population && <p className='pop'>{population}</p>}
      {terrain && <p className='terrain'>{terrain}</p>}
      {climate && <p className='climate'>{climate}</p>}
      {residents && <p className='residents'>{residents}</p>}
      <button className='fav-btn'>Fav</button>
    </article>
  )
}

export default Card;