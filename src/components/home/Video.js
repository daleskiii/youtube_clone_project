import React from "react";
import { Link } from "react-router-dom";

function Video({ snippet, id }) {
  return (
    <div className="col">
      <img
        src={snippet.thumbnails.medium.url}
        alt={snippet.title}
        style={{ width: "100%", height: "100%" }}
      />
      <Link to={`/video/${id.videoId}`} style={{ textDecoration: "none" }}>
        <h5 style={{ color: "black", padding: 20 }}>{snippet.title}</h5>
      </Link>
    </div>
  );
}

export default Video;
