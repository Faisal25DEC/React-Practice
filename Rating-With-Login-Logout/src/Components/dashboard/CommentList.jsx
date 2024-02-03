import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => {
        return <Comment comment={comment} index={index} />;
      })}
    </>
  );
};
export default CommentList;
