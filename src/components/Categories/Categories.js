import React from 'react';
import { NavLink } from 'react-router-dom';
import './Categories.scss';



const Categories = ({checkAvail}) => {
  return (
    <section className='categories'>
      <NavLink to='/people'><button className='category' onClick={checkAvail}>People</button></NavLink>
      <NavLink to='/planets'><button className='category' onClick={checkAvail}>Planets</button></NavLink>
      <NavLink to='/vehicles'><button className='category' onClick={checkAvail}>Vehicles</button></NavLink>
    </section>
  )
}

export default Categories;