// Single page separate display

import React, { Component } from "react";
import styled from "styled-components";
import { Poster } from "./Movie";
import Overdrive from "react-overdrive";
import loading from "./loading.svg";
import { API_KEY } from "./MovieList";
import "./MovieDetails.css";
import { Link } from "react-router-dom";

const POSTER_PATH = "http://image.tmdb.org/t/p/w200";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";
// const REVIEW_URL = "http://api.themoviedb.org/3/movie/";
const CAST_URL = "https://image.tmdb.org/t/p/w154";
// 83542/reviews?api_key=24546d384e0d7b7c8db5d8333ef06713'

class MovieDetail extends Component {
  state = {
    movie: {},
    errMsg: ""
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }?api_key=${API_KEY}&language=en-US&&append_to_response=credits`
      );
      if (res.ok) {
        const movie = await res.json();
        console.log(res);
        console.log(movie.credits.cast[0].name);
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
        <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
          <MovieInfo>
            {movie.poster_path && (
              <Overdrive id={`${movie.id}`}>
                <Poster
                  src={`${POSTER_PATH}${movie.poster_path}`}
                  alt={movie.title}
                />
              </Overdrive>
            )}
            <div>
              <h1 style={{ color: "white" }}>{movie.title}</h1>
              <p style={{ fontSize: "15px" }}>
                {" "}
                {movie.vote_average}{" "}
                <i className="yellow lg star outline icon" />{" "}
              </p>
              <h3>{movie.release_date}</h3>
              <p>{movie.overview}</p>

              <Link to={`/${movie.id}`}>
                <button className="btn mt-4 button"> Play Movie </button>
              </Link>
            </div>
          </MovieInfo>
          <CastGrid>
            <div>
              <img
                src={`${CAST_URL}${movie.credits.cast[0].profile_path}`}
                alt="cast"
                className="zoom"
              />
              <img
                src={`${CAST_URL}${movie.credits.cast[1].profile_path}`}
                alt="cast"
                className="zoom"
              />
              <img
                src={`${CAST_URL}${movie.credits.cast[2].profile_path}`}
                alt="cast"
                className="zoom"
              />
              <img
                src={`${CAST_URL}${movie.credits.cast[3].profile_path}`}
                alt="cast"
                className="zoom"
              />
              <img
                src={`${CAST_URL}${movie.credits.cast[4].profile_path}`}
                alt="cast"
                className="zoom"
              />
              <img
                src={`${CAST_URL}${movie.credits.cast[5].profile_path}`}
                alt="cast"
                className="zoom"
              />
            </div>
          </CastGrid>
        </MovieWrapper>
      );
    }
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

export const MovieInfo = styled.div`
  background: black;
  color: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
export const CastGrid = styled.div`
  display: grid;
  background-color: black;
  padding: 10px;
  img {
    padding: 5px;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 200px;
`;
