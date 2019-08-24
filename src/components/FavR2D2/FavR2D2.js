import React from 'react';
import './FavR2D2.scss';

const FavR2D2 = ({numOfFavs}) => {
  return (
    <section className='fav-R2D2'>
      <button className='favorites-btn'>View Favorites {numOfFavs}</button>
    </section>

  );
}

export default FavR2D2;