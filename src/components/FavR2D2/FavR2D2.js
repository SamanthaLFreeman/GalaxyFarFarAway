import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './FavR2D2.scss';

const FavR2D2 = ({numOfFavs, checkAvail}) => {
  return (
    <section className='fav-R2D2'>
      <NavLink to='/favorites'>
        <label>View Favorites</label>
        <button className='favorites-btn' onClick={checkAvail}>{numOfFavs}</button>
      </NavLink>
    </section>

  );
}

export default FavR2D2;

FavR2D2.propTypes = {
  numOfFavs: PropTypes.number
}