import React from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import "./videoPlayer.css";
import ComandName from "./ComandName";

function VideoPlayer() {
  const { id } = useParams();

  return (
    <>
      <div id="youtubeContainer" className="container">
        <div className="youtube">
          <YouTube videoId={id} />
        </div>
      </div>
      <ComandName />
    </>
  );
}

export default VideoPlayer;
