import React, { Component } from "react";
import axios from "axios";
import ModalVideo from "react-modal-video";
import { Glyphicon } from "react-bootstrap";


const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';
const TRAILER_PATH= 'https://www.youtube.com/embed/';
const API_KEY = '24546d384e0d7b7c8db5d8333ef06713';


class Modals extends Component {
    state = {
        movies:"",
        trailerPath: '',
        selected: 0,
      }
      componentDidMount() {
        this.getVideo(0);
      }
    
      getVideo = async (i) => {
        try {
          console.log(`https://api.themoviedb.org/3/movie/${this.props.movies[i].id}/videos?api_key=${API_KEY}&language=en-US`)
          const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.movies[i].id}/videos?api_key=${API_KEY}&language=en-US`);
          const videos = await res.json();
          const fullPath = `${TRAILER_PATH}${videos.results[0].key}`;
          this.setState({
            trailerPath: fullPath,
            selected: i,
          })
        } catch (e) {
          console.log(e);
        }
      }
    render() {
        return (
            <iframe
            src={`${this.state.trailerPath}`}
            title={movies[this.state.selected].title}
            width='500'
            height='300'
            allowFullScreen={true}
          />
        );
    
    }
}
  
export default Modals;