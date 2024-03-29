import React from 'react';
import PropTypes from 'prop-types';
import './Movies.scss';

const Movies = ({film, btnClicked}) => {
  const filmClass = btnClicked ? 'movie-hidden' : 'movie';
  return (
    <section className={filmClass}>
      <div className="fade"></div>

      <section className="star-wars">

        <div className="crawl">

          <div className="title">
      <p>{film.title}</p>
          </div>

      <p>{film.opening_crawl}</p>  
      <p>{film.release_date}</p>
        </div>

      </section>  
    </section>
  );

}

export default Movies;

Movies.protoTypes = {
  film: PropTypes.object
}