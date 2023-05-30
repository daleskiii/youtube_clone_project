import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Display from "./Display";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [videoList, setVideoList] = useState([]);
  const [message, setMessage] = useState(`No Search Results! Please submit 
  a search above!`);

  function handleOnSubmit(event) {
    event.preventDefault();

    async function getData() {
      try {
        const result =
          await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=
    ${event.target.query.value} &type=video&key=AIzaSyAxrg1FsPQSEGLDOxgF09AhlRbUppuAFys&maxResults=7`);

        setVideoList(result.data.items);
      } catch (e) {
        console.log(e);
      }
    }
    getData();

    setSearchTerm("");

    setMessage("");
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
            onChange={(event) => setSearchTerm(event.target.value)}
            required
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-danger">
              Search
            </button>
          </div>
        </div>
      </form>
      <Display searchTerm={searchTerm} videoList={videoList} />
      <div className="container">
        <ul className="list-group">
          <li className="list-group-item list-group-item-light">{message}</li>
        </ul>
      </div>
    </div>
  );
}

export default Search;
