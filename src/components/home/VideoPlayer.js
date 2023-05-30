import React from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import "./videoPlayer.css";
import ComandName from "./ComandName";

function VideoPlayer() {
  const { id } = useParams();
  // usePAram hook to store the value of the id

  return (
    <>
      <div id="youtubeContainer" className="container">
        <div className="youtube">
          <Video videoId={id} />
        </div>
      </div>
      <ComandName />
    </>
  );
}

function Video({ videoId }) {
  return <YouTube videoId={videoId} />;
}

export default VideoPlayer;
