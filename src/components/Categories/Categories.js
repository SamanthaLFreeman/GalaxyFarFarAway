import React from 'react';
import { NavLink } from 'react-router-dom';
import './Categories.scss';

const Categories = () => {
  return (
    <section className='categories'>
      <NavLink to='/people'><button className='people'>People</button></NavLink>
      <NavLink to='/planets'><button className='planets'>Planets</button></NavLink>
      <NavLink to='/vehicles'><button className='vehicles'>Vehicles</button></NavLink>
    </section>
  )
}

export default Categories;