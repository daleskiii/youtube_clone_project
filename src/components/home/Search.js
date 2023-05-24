import React from 'react'
import "./Search.css";

function Search() {
  return (
    <div className="container">
    <form action="/search" method="GET">
      <div className="input-group mb-3">
        <input type="text" name="query" className="form-control" placeholder="Search..."/>
        <div className="input-group-append">
          <button type="submit" className="btn btn-danger">Search</button>
        </div>
      </div>
    </form>
  </div>
  )
}

export default Search