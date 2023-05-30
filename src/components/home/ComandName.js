import React from "react";
import { useState } from "react";
import "./ComandName.css";

export default function ComandName() {
  // defined state with values
  // set name to empty string
  // set comment to empty string
  // set comments to empty array to store values
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // created a handleSubmit function for form submission.
  // called preventDefault function to stop page refresh
  // made a new object with the name and comment value
  // adds the new comments to the copied comments object
  //clears the comment and names input fields

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      name,
      comment,
    };
    setComments([...comments, newComment]);

    //resets form
    setComment("");
    setName("");

    // if (name.trim() === "" || comment.trim() === "") {
    //   alert("cant submit without filling out");
    //   return;
    // }
  };
  /// created a delete function to delete a comment from array
  // defined a new variable with a copy of the comments array
  // declared the splice function on the new variable, removes 1 element from specified index
  // updates the state of the comments value

  const handleDelete = (index) => {
    const updatedComment = [...comments];
    updatedComment.splice(index, 1);
    setComments(updatedComment);
  };

  return (
    
    <div className="container">
        <div class="list-group">
        {comments.map((comment, index) => (
          <ul class="list-group-item list-group-item-action" key={index}>
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{comment.name}</h5>
              <p>{comment.comment}</p>
              <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </ul>
        
        ))}
      </div>
      <form className="comment-form" onSubmit={handleSubmit}>
        <h2 className="form-heading"> Comments</h2>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">
            {" "}
            Comment:{" "}
          </label>
          <input
            className="form-control"
            type="text"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-danger "
          // onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
