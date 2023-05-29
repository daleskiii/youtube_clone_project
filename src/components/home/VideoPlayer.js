import React from 'react'
import YouTube from 'react-youtube';
import { useParams } from "react-router-dom";
import "./videoPlayer.css"


function VideoPlayer() {
    const { id } = useParams();
    
  return (
    <div>
        <div id="youtubeContainer" className='container'>
            <div className='youtube'><YouTube videoId={id} /></div>
        </div>
    </div>
  )
}

export default VideoPlayer