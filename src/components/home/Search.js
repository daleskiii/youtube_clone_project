import React from "react";
import "./Search.css";

function Search() {
  function fetchApi() {
    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=M7lc1UVf-VE&key=AIzaSyAxrg1FsPQSEGLDOxgF09AhlRbUppuAFys"
    )
      .then((response) => response.json())
      .then((data) => {
        // Process the retrieved video data
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.log("Error:", error);
      });
  }

  return (
    <div className="container">
      <form action="/search" method="GET">
        <div className="input-group mb-3">
          <input
            type="text"
            name="query"
            className="form-control"
            placeholder="Search..."
          />
          <div className="input-group-append">
            <button
              type="submit"
              className="btn btn-danger"
              onClick={fetchApi()}
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Search;
