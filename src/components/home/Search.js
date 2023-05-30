import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Display from "./Display";

function Search() {
  // created state variable for search term which is the value the user search.
  // created state variables for the video list which is a value of a empty array,
  // created a state variable for the message which is a value of a string which requires the user to submit a search
  const [searchTerm, setSearchTerm] = useState("");
  const [videoList, setVideoList] = useState([]);
  const [message, setMessage] = useState(`No Search Results! Please submit 
  a search above!`);
  //defined a function for the submit event on form element
  // declared the preventDefault function to stop the page from refreshing on submitting.
  function handleOnSubmit(event) {
    event.preventDefault();
    // define a aysnc function to using axios to get youtube api

    async function getData() {
      try {
        const result =
          await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=
    ${event.target.query.value} &type=video&key=AIzaSyAxrg1FsPQSEGLDOxgF09AhlRbUppuAFys&maxResults=7`);
        // dynamically searching for the value provided by the user in the input field
        // function to update the state of the video list empty array to the api result object.data.item

        setVideoList(result.data.items);
      } catch (e) {
        console.log(e);
        return `API is Wilding Rn`;
      }
    }
    // declare aync function
    getData();
    // reset search team
    setSearchTerm("");
    // reset message
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
