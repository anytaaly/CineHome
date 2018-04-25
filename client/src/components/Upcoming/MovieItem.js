import React from 'react';
import PropTypes from 'prop-types';
import Overdrive from 'react-overdrive';
import { Poster } from './Movie';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const MovieItem = ({ movie, showModal }) => (
  <Overdrive id={`${movie.id}`} key={movie.id} onClick={(e) => showModal(movie.id)} style={{ cursor: 'pointer' }}>
    <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
  </Overdrive>
);

MovieItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default MovieItem;
