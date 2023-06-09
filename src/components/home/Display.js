import Video from "./Video";
import React from "react";

function Display({ videoList }) {
  // map through the videoList.array
  // uuse item.id.videoID as a key for the Video component
  // also define a copy of a the item array from the map callback function
  return (
    <main>
      <div className="container text-center">
        <div className="row row-cols-3">
          {videoList.map((item) => {
            return <Video key={item.id.videoId} {...item} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default Display;
