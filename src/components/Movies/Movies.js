import React from 'react';
import PropTypes from 'prop-types';
import './Movies.scss';

const Movies = ({film}) => {
  return (
    <section className='movie'>
    <marquee width="40%" direction="up" scrollamount="6" behavior="scroll">
      <p>{film.title}</p>
      <p>{film.opening_crawl}</p>  
      <p>{film.release_date}</p>
    </marquee>   
    </section>
  );

}

export default Movies;

Movies.protoTypes = {
  film: PropTypes.object
}