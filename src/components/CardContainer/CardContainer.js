import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card'
import './CardContainer.scss';

const CardContainer = ({ path, allData, toggleFavorite}) => {
  const cards = allData.map(data => {
    const {name, type, language, terrain, population, climate, residents, homeworld, species, model, vehicleClass, numOfPassengers, isFavorite} = data;
    return <Card
        type={type}
        name={name}
        language={language}
        terrain={terrain}
        population={population}
        climate={climate}
        residents={residents}
        homeworld={homeworld}
        species={species}
        model={model}
        vehicleClass={vehicleClass}
        numOfPassengers={numOfPassengers}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
        key={name} />
  })

  return (
    <section className='card-container'>
      {!allData.length && <p>Luke, you haven't favorited any cards yet!</p>}
      {cards}
    </section>
  )
}

export default CardContainer;

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