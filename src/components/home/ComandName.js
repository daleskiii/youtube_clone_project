import React from "react";
import { useState } from "react";

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
    setComment("");
    setName("");
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
    <>
      <form className="comment-form">
        <h2> Comments</h2>
        <div className="comment-sec">
          <label htmlFor="name" className="name-input">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="comment"> Comment: </label>
          <input
            type="text"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <div>
        {comments.map((c, index) => (
          <div key={index}>
            <strong>{c.name}</strong>
            <p>{c.comment}</p>

            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}
