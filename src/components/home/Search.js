import React, { useState } from 'react'
import axios from 'axios';
import "./Search.css";
import Display from "./Display";


function Search() {
  const [searchTerm, setSearchTerm] = useState("")
  const [videoList, setVideoList] = useState([])


 function handleOnSubmit(event){
  event.preventDefault();

  console.log(`${searchTerm} was submitted` );
  // console.log(event.target.query.value);

   async function getData() {
    try {
    const result = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=` + 
    `${event.target.query.value}` + `&type=video&key=AIzaSyAxrg1FsPQSEGLDOxgF09AhlRbUppuAFys&maxResults=7`);

    setVideoList(result.data.items)
    // console.log(result.data.items);
  } catch (e) {
    console.log(e);
  }
}
  getData()
  console.log(videoList);
  
  //reset form when submited
  setSearchTerm("")
 }


  return (
    <div className="container">
      <form action="/search" onSubmit={handleOnSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            name="query"
            id="query"
            className="form-control"
            placeholder="Search..."
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
          />
          <div className="input-group-append">
            <button
              type="submit"
              className="btn btn-danger"
>
              Search
            </button>
          </div>
        </div>
      </form>
      <Display 
      searchTerm={searchTerm}
      videoList={videoList}
      />
    </div>
  );
}

export default Search;
