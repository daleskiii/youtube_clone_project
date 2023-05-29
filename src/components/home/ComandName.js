import React from "react";
import { useState } from "react";

export default function ComandName() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

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
