import Video from './Video'
import React, { useState } from 'react'

function Display({videoList}) {
  const [message, setMessage] = useState(false);


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
  )
}

export default Display