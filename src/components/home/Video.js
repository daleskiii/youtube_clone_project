import React from 'react'

function Video({snippet}) {

  return (
    <div className="col">
    <img src={snippet.thumbnails.medium.url} alt={snippet.title}/>
     {/* <a href="#">{snippet.title}</a> */}
     <h5>{snippet.title}</h5>
     </div>
  )
}

export default Video