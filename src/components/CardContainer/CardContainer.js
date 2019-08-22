import React from 'react';
import Card from '../Card/Card'
import './CardContainer.scss';

const CardContainer = ({people}) => {
  const peopleCards = people.map(person => {
    return <Card card={person} key={person.name}/>
  })
  return (
    <section className='card-container'>
      {console.log(people)}
      {peopleCards}
    </section>
  )
}

export default CardContainer;