import React from 'react';
import './Categories.scss';

const Categories = () => {
  return (
    <section className='categories'>
      <button className='people'>People</button>
      <button className='planets'>Planets</button>
      <button className='vehicles'>Vehicles</button>
    </section>
  )
}

export default Categories;