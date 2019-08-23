import React from 'react';
import './Card.scss';

const Card = ({ name, terrain, population, climate, residents, homeworld, species, model, vehicleClass, numOfPassengers, toggleFavorite }) => {
  return (
    <article className='card'>
      { name && <h2 className='name'>{name}</h2>}
      { homeworld && <p className='homeworld'>{homeworld}</p>}
      { species && <p className='species'>{species}</p>}
      { population && <p className='pop'>{population}</p>}
      {terrain && <p className='terrain'>{terrain}</p>}
      {climate && <p className='climate'>{climate}</p>}
      {residents && <p className='residents'>{residents}</p>}
      {model && <p className='model'>{model}</p>}
      {vehicleClass && <p className='vehicleClass'>{vehicleClass}</p>}
      {numOfPassengers && <p className='numOfPassengers'>{numOfPassengers}</p>}
      <button className='fav-btn' onClick={() => toggleFavorite(name)}>Fav</button>
    </article>
  )
}

export default Card;