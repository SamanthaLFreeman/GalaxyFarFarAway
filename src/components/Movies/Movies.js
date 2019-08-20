import React from 'react';
import './Movies.scss';

const Movies = (props) => {
  return (
    <section className='movies'>
    Movies
    {console.log(props.films)}
    </section>
  );

}

export default Movies;