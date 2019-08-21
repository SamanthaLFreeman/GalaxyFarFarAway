import React from 'react';
import './Movies.scss';

const Movies = ({films}) => {
  return (
    <section className='movie'>
    <marquee width="40%" direction="up" scrollamount="6" behavior="scroll">
      <p>{films.title}</p>
      <p>{films.opening_crawl}</p>  
      <p>{films.release_date}</p>
    </marquee>   
    </section>
  );

}

export default Movies;