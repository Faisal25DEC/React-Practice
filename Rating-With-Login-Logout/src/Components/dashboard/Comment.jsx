import React from "react";
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";
import { CommentsContext } from "../../Contexts/CommentsContext";
import { useContext } from "react";

const Comment = ({ comment, index }) => {
  let { title, color, id, rating } = comment;
  const { comments, setComments } = useContext(CommentsContext);
  console.log("first");
  return (
    <div key={id} className="ratingcard">
      <h1 style={{ color: color }}>{title}</h1>
      <StarRating rating={rating} index={index} />
      <FaTrash
        onClick={() => {
          comments.splice(index, 1);
          setComments([...comments]);
        }}
        data-icon="trash"
      />
    </div>
  );
};
export default Comment;
