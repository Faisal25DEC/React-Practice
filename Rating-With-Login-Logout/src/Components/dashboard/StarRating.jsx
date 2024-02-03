import Star from "./Star";

const StarRating = ({ rating, index }) => {
  return (
    <>
      <p>{rating} of 5</p>
      {Array.from({ length: 5 }, (_, i) => {
        return (
          <Star
            starNumber={i}
            index={index}
            color={i < rating ? "yellow" : "grey"}
          />
        );
      })}
    </>
  );
};
export default StarRating;
