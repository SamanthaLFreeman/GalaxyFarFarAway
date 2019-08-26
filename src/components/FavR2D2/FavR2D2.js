import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import starImage from '../../Images/star3.png'
import './FavR2D2.scss';

const FavR2D2 = ({numOfFavs, checkAvail}) => {
  return (
    <section className='fav-R2D2'>
      <NavLink to='/favorites'>
        <button className='favorites-btn' onClick={checkAvail}><img src={starImage} alt='' className='star-img'></img>{numOfFavs} View Favorites</button>
      </NavLink>
    </section>

  );
}

export default FavR2D2;

FavR2D2.propTypes = {
  numOfFavs: PropTypes.number
}