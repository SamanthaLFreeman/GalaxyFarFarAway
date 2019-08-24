import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ type, name, language, terrain, population, climate, residents, homeworld, species, model, vehicleClass, numOfPassengers, toggleFavorite, isFavorite}) => {
  const btnClass = isFavorite ? 'fav-btn-active' : 'fav-btn';

  return (
    <article className='card'>
      { name && <h2 className='name'>{name}</h2> }
      { homeworld && <p className='homeworld'>{homeworld}</p> }
      { species && <p className='species'>{species}</p> }
      { language && <p className='language'>{language}</p>}
      { population && <p className='pop'>{population}</p> }
      { terrain && <p className='terrain'>{terrain}</p> }
      { climate && <p className='climate'>{climate}</p> }
      { residents && <p className='residents'>{residents}</p> }
      { model && <p className='model'>{model}</p> }
      { vehicleClass && <p className='vehicleClass'>{vehicleClass}</p> }
      { numOfPassengers && <p className='numOfPassengers'>{numOfPassengers}</p> }
      <button className={btnClass} onClick={() => toggleFavorite(name, type)}>Fav</button>
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
  numOfPassengers: PropTypes.number,
  toggleFavorite: PropTypes.func,
  isFavorite: PropTypes.bool
}