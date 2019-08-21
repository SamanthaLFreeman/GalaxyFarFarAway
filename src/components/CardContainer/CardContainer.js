import React from 'react';
import Card from '../Card/Card'
import './CardContainer.scss';

const CardContainer = (props) => {
  return (
    <section className='card-container'>
      {console.log(props)}
      <Card />
    </section>
  )
}

export default CardContainer;