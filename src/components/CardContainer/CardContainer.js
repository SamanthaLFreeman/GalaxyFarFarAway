import React from 'react';
import Card from '../Card/Card'
import './CardContainer.scss';

const CardContainer = ({allData, toggleFavorite}) => {
  // console.log(allData.toggleFavorite)
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
    key={name}/>
  })

  return (
    <section className='card-container'>
      {cards}
    </section>
  )
}

export default CardContainer;