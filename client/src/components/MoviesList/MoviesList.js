import React, { Component } from "react";
import styled from "styled-components";
import MovieModal from "./MovieModal";
import MovieItem from "./MovieItem";
import Pagination from "./Pagination";
import VideoBackDrop from "./VideoBackDrop";
import Footer from "../Footer/Footer";

export const API_KEY = "24546d384e0d7b7c8db5d8333ef06713";

class MoviesList extends Component {
  state = {
    movies: {},
    errMsg: "",
    show: false,
    showMovieId: "",
    pagesAllowed: 5,
    currentPage: 1
  };
  componentDidMount() {
    this.fetchMoreMovies(1);
  }
  showModal = id => {
    this.setState({
      showMovieId: id,
      show: true
    });
  };
  closeModal = e => {
    if (e.target.id === "modal") {
      this.setState({
        show: false,
        showMovieId: ""
      });
    }
  };
  changePage = i => {
    if (i > 0 && i <= this.state.pagesAllowed) {
      if (this.state.movies) {
        this.fetchMoreMovies(i);
      }
      this.setState({ currentPage: i });
    }
  };
  fetchMoreMovies = async pageNum => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNum}`
      );
      if (res.ok) {
        const movies = await res.json();
        // console.log(res);
        this.setState({
          movies: {
            ...this.state.movies,
            [`page${pageNum}`]: movies.results
          }
        });
      } else {
        this.setState({
          errMsg: `${res.status} ${res.statusText}`
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <div>
        {this.state.movies[`page${this.state.currentPage}`] && (
          <VideoBackDrop
            movies={this.state.movies[`page${this.state.currentPage}`]}
          />
        )
        // {console.log([movies])}
        }
        <MovieGrid>
          {this.state.movies[`page${this.state.currentPage}`] &&
            this.state.movies[`page${this.state.currentPage}`].map(movie => (
              <MovieItem
                key={movie.id}
                movie={movie}
                showModal={this.showModal}
              />
            ))}
        </MovieGrid>

        {this.state.show && (
          <MovieModalWrapper onClick={this.closeModal} id="modal">
            <MovieModal movieId={this.state.showMovieId} />
          </MovieModalWrapper>
        )}
        {this.state.movies[`page${this.state.currentPage}`] && (
          <Pagination
            totalPages={this.state.pagesAllowed}
            currentPage={this.state.currentPage}
            changePage={this.changePage}
            pagesIndicesList={Array.from(
              new Array(this.state.pagesAllowed),
              (val, i) => i + 1
            )}
          />
        )}
        <Footer />
      </div>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, 154px);
  grid-gap: 2rem 3rem;
  justify-content: center;
`;

const MovieModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;
