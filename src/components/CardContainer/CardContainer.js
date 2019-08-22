import React from 'react';
import Card from '../Card/Card'
import './CardContainer.scss';

const CardContainer = (props) => {
  const people = props.people.map(person => {
    return <Card card={person} key={person.name}/>
  })
  return (
    <section className='card-container'>
      {console.log(props)}
      {people}
    </section>
  )
}

export default CardContainer;