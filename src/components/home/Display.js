// import React, { useEffect, useState } from 'react'
import Video from './Video'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// import axios from 'axios';

function Display({searchTerm, videoList}) {
  // const { id } = useParams();


  return (
    <main>
       <div className="container text-center">
         <div className="row row-cols-3">
           {videoList.map((item) => {
            // return <Video key={item.id.videoId} {...item} />;
            return <Link 
            to={`/video/${item.id.videoId}`}
            key={item.id.videoId}
            className="product-link">
            <Video key={item.id.videoId} {...item} />;
            </Link>

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