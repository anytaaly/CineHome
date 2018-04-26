import React, { Component } from "react";
import styled from "styled-components";
import { Poster } from "./Movie";
import Overdrive from "react-overdrive";
import loading from "./loading.svg";
import { LoadingWrapper } from "./MovieDetail";
import { API_KEY } from "./MovieList";
import { Link } from "react-router-dom";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
// const REVIEW_URL = "http://api.themoviedb.org/3/movie/";
// 83542/reviews?api_key=24546d384e0d7b7c8db5d8333ef06713'

class MovieModal extends Component {
  state = {
    movie: {},
    errMsg: ""
  };
  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.movieId
        }?api_key=${API_KEY}&language=en-US`
      );
      if (res.ok) {
        const movie = await res.json();
        setTimeout(() => this.setState({ movie }));
      } else {
        this.setState({
          errMsg: `${res.status} ${res.statusText}`
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;
    if (Object.keys(movie).length === 0) {
      return (
        <LoadingWrapper>
          <img src={loading} alt="loading icon" />
        </LoadingWrapper>
      );
    } else {
      return (
        <MovieModalInfo>
          {movie.poster_path && (
            <Overdrive id={`${movie.id}`}>
              <Poster
                src={`${POSTER_PATH}${movie.poster_path}`}
                alt={movie.title}
              />
            </Overdrive>
          )}
          <div style={{ overflow: "hidden" }}>
            <h1 style={{ color: "black" }}>{movie.title}: </h1>
            <p style={{ fontSize: "15px", color: "black" }}>
              {" "}
              {
                movie.vote_average
              } <i className="yellow lg star outline icon" />{" "}
            </p>
            <Link to={`/${movie.id}`}>
              <button className="btn mt-4 button">VISIT MOVIE PAGE</button>
            </Link>
            <h3 style={{ color: "black" }}>{movie.release_date}</h3>
            <p style={{ color: "black" }}>{movie.overview}</p>
          </div>
        </MovieModalInfo>
      );
    }
  }
}

const MovieModalInfo = styled.div`
  background-color: white;
  overflow: hidden;
  width: 70%;
  height: 300px;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 20px;
  > div {
    margin-left: 0.5rem;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;

export default MovieModal;
