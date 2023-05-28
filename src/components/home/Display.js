// import React, { useEffect, useState } from 'react'
import Video from './Video'
// import axios from 'axios';

function Display({searchTerm, videoList}) {


  return (
    <main>
       <div className="container text-center">
         <div className="row row-cols-3">
           {videoList.map((item) => {
            return <Video key={item.id.videoId} {...item} />;
          })}
           </div>
        </div>
      
    <div className='container'>
      <ul className="list-group">
       <li className="list-group-item list-group-item-light"> No Search Results! Please submit 
       a search above!</li>
      </ul>
    </div>
    </main>
  )
}

export default Display