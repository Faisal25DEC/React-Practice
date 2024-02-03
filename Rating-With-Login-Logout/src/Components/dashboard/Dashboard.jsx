import { CommentsContext } from "../../Contexts/CommentsContext";
import CommentList from "./CommentList";
import { useState, useContext, useEffect } from "react";

const data = [
  {
    id: 1,
    title: "Very Poor",
    color: "red",
    rating: 1,
  },
  {
    id: 2,
    title: "Poor",
    color: "yellow",
    rating: 2,
  },
  {
    id: 3,
    title: "good",
    color: "orange",
    rating: 3,
  },
  {
    id: 4,
    title: "Very Good",
    color: "lightgreen",
    rating: 4,
  },
  {
    id: 5,
    title: "Excellent",
    color: "green",
    rating: 5,
  },
];

const Dashboard = () => {
  const { setAuthenticationStatus, setComments, comments } =
    useContext(CommentsContext);

  console.log("third");
  useEffect(() => {
    setComments(data);
    console.log("second");
  }, []);

  return (
    <div className="dashboard">
      <h1>Rating - App</h1>
      <button
        onClick={() => {
          setAuthenticationStatus(false);
        }}
      >
        Logout
      </button>

      <CommentList comments={comments} />
    </div>
  );
};

export default Dashboard;
