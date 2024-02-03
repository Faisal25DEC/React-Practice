import React from "react";
import { FaStar } from "react-icons/fa";
import { CommentsContext } from "../../Contexts/CommentsContext";
import { useContext } from "react";

const titleObject = {
  1: "Very Poor",
  2: "Poor",
  3: "good",
  4: "Very Good",
  5: "Excellent",
};
const colorObject = {
  1: "red",
  2: "yellow",
  3: "orange",
  4: "lightgreen",
  5: "green",
};

const Star = ({ starNumber, color, index }) => {
  console.log("fourth");
  const { comments, setComments } = useContext(CommentsContext);
  return (
    <FaStar
      key={starNumber}
      data-icon="star"
      color={color}
      onClick={() => {
        comments[index].rating = starNumber + 1;
        comments[index].title = titleObject[starNumber + 1];
        comments[index].color = colorObject[starNumber + 1];
        setComments([...comments]);
      }}
    />
  );
};
export default Star;
