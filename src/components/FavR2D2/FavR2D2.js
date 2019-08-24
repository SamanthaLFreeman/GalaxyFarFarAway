import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './FavR2D2.scss';

const FavR2D2 = ({numOfFavs}) => {
  return (
    <section className='fav-R2D2'>
      <NavLink to='/favorites'><button className='favorites-btn'>View Favorites {numOfFavs}</button></NavLink>
    </section>

  );
}

export default FavR2D2;

FavR2D2.propTypes = {
  numOfFavs: PropTypes.number
}