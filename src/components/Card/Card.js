import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ type, name, language, terrain, population, climate, residents, homeworld, species, model, vehicleClass, numOfPassengers, toggleFavorite, isFavorite}) => {
  const btnClass = isFavorite ? 'fav-btn-active' : 'fav-btn';
  const favCardClass = isFavorite ? 'cards fav-card' : 'cards';

  return (
    <article className={favCardClass}>
      <div className='card'>
      <button className={btnClass} onClick={() => toggleFavorite(name, type)}></button>
        { name && <h2 className='name'>{name}</h2> }
        { homeworld && <p className='homeworld'>Homeworld: {homeworld}</p> }
        { species && <p className='species'>Species: {species}</p> }
        { language && <p className='language'>Language: {language}</p>}
        { population && <p className='pop'>Population: {population}</p> }
        { terrain && <p className='terrain'>Terrain: {terrain}</p> }
        { climate && <p className='climate'>Climate: {climate}</p> }
        { residents && <p className='residents'>Residents: {residents}</p> }
        { model && <p className='model'>Model: {model}</p> }
        { vehicleClass && <p className='vehicleClass'>Class: {vehicleClass}</p> }
        { numOfPassengers && <p className='numOfPassengers'>Passengers: {numOfPassengers}</p> }
      </div>
    </article>
  )
}

export default Card;

Card.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  language: PropTypes.string,
  terrain: PropTypes.string,
  population: PropTypes.string,
  climate: PropTypes.string,
  residents: PropTypes.array,
  homeworld: PropTypes.string,
  species: PropTypes.string,
  model: PropTypes.string,
  vehicleClass: PropTypes.string,
  numOfPassengers: PropTypes.string,
  toggleFavorite: PropTypes.func,
  isFavorite: PropTypes.bool
}