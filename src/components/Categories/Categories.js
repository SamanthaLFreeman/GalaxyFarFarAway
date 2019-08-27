import React from 'react';
import { NavLink } from 'react-router-dom';
import './Categories.scss';



const Categories = ({checkAvail}) => {
  console.log(checkAvail);
  return (
    <section className='categories'>
      <NavLink to='/people'><button className='people category' onClick={checkAvail}>People</button></NavLink>
      <NavLink to='/planets'><button className='planets category' onClick={checkAvail}>Planets</button></NavLink>
      <NavLink to='/vehicles'><button className='vehicles category' onClick={checkAvail}>Vehicles</button></NavLink>
    </section>
  )
}

export default Categories;