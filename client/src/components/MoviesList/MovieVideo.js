import React from "react";
import { Player } from "video-react";
import { VideoPlayer } from "react-video-players";
const TRAILER_PATH = "https://www.youtube.com/embed/";

const MovieVideo = props => {
  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/d96cjJhvlMA"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen={true}
    />
  );
};

export default MovieVideo;
