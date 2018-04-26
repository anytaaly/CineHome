// Displays the TopMovie list and the Video for the selectedMovie
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { API_KEY } from "./MoviesList";

const BACKDROP_S_PATH = "http://image.tmdb.org/t/p/w300";
const BACKDROP_L_PATH = "http://image.tmdb.org/t/p/w780";
const TRAILER_PATH = "https://www.youtube.com/embed/";

class VideoBackDrop extends Component {
  state = {
    trailerPath: "",
    selected: 0
  };
  componentDidMount() {
    this.getVideo(0);
  }
  getVideo = async i => {
    try {
      console.log(
        `https://api.themoviedb.org/3/movie/${
          this.props.movies[i].id
        }/videos?api_key=${API_KEY}&language=en-US`
      );
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.movies[i].id
        }/videos?api_key=${API_KEY}&language=en-US`
      );
      const videos = await res.json();
      const fullPath = `${TRAILER_PATH}${videos.results[0].key}`;
      this.setState({
        trailerPath: fullPath,
        selected: i
      });
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    const { movies } = this.props;
    return (
      <div style={{ backgroundColor: "#111" }}>
        <p
          style={{
            textAlign: "left",
            color: "#eee",
            marginLeft: "1.5rem",
            marginTop: "0",
            fontSize: "50px"
          }}
        >
          Top Movies
        </p>

        <ListHorizontal>
          {movies.map((movie, index) => (
            <MovieSingleItem key={index}>
              <p
                style={{
                  color: "white",
                  position: "absolute",
                  bottom: 12,
                  left: 10
                }}
              >
                {movie.title}
              </p>
              <MovieSingleItemImage
                src={`${BACKDROP_S_PATH}${movie.backdrop_path}`}
                alt={movie.title}
                active={index === this.state.selected}
                onClick={() => this.getVideo(index)}
              />
            </MovieSingleItem>
          ))}
        </ListHorizontal>

        <DetailWrapper>
          <DashboardBackground
            backdrop={`${BACKDROP_L_PATH}${
              movies[this.state.selected].backdrop_path
            }`}
          />
          <DashboardDetail>
            <div
              style={{
                maxWidth: 500,
                padding: 20,
                textAlign: "left",
                marginLeft: 30
              }}
            >
              <h2
                style={{
                  fontWeight: 700,
                  fontSize: "25px",
                  fontFamily: "Nanum Gothic"
                }}
              >
                {movies[this.state.selected].title}
              </h2>
              <p style={{ fontSize: "15px" }}>
                {" "}
                {movies[this.state.selected].vote_average}{" "}
                <i className="yellow lg star outline icon" />{" "}
              </p>
              <p style={{ fontFamily: "Playfair Display", fontSize: "14px" }}>
                Released: {movies[this.state.selected].release_date}
              </p>
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 100,
                  fontFamily: "Nanum Gothic",
                  marginBottom: 40
                }}
              >
                {movies[this.state.selected].overview}
              </p>
              <Link to={`/${movies[this.state.selected].id}`}>
                <button className="btn mt-4 button"> VISIT MOVIE PAGE </button>
              </Link>
              <span> </span>
              <Link to={`/${movies[this.state.selected].id}`}>
                <button className="btn mt-4 button"> READ REVIEW </button>
              </Link>
            </div>
            <iframe
              src={`${this.state.trailerPath}`}
              title={movies[this.state.selected].title}
              width="500"
              height="300"
              allowFullScreen={true}
            />
          </DashboardDetail>
        </DetailWrapper>
      </div>
    );
  }
}

const ListHorizontal = styled.div`
  overflow-x: auto;
  display: flex;
  flex-wrap: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const MovieSingleItem = styled.div`
  text-align: left;
  margin-left: 1.5rem;
  padding-bottom: 1rem;
  position: relative;
  cursor: pointer;
`;

const MovieSingleItemImage = styled.img`
  border: ${props => (props.active ? "1.5px solid #eee" : "1.5px solid #111")};
`;

const DetailWrapper = styled.div`
  position: relative;
  height: 400px;
  display: flex;
  justify-content: center;
`;

const DashboardBackground = styled.div`
  height: 400px;
  width: 100%;
  background-image: url(${props => props.backdrop});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(1px) brightness(20%);
`;

const DashboardDetail = styled.div`
  height: 100%;
  backgroundcolor: transparent;
  position: absolute;
  top: 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default VideoBackDrop;
