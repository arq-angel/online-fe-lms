import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const maxRating = 5;
export const Star = ({ avgRating, totalReviews }) => {
  if (avgRating < 0 || avgRating > 5) {
    return "";
  }

  // 5, 2.3
  const halfStar = !Number.isInteger(avgRating);
  const fullStar = Math.floor(avgRating);
  const emptyStar = maxRating - fullStar - (halfStar ? 1 : 0);

  let showStars = [];

  // full stars
  for (let i = 0; i < fullStar; i++) {
    showStars.push(<FaStar key={`full-${i}`} className="text-warning" />);
  }

  // half stars to show
  if (halfStar)
    showStars.push(<FaStarHalfAlt key={"half"} className="text-warning" />);

  // empty stars to show
  for (let i = 0; i < emptyStar; i++) {
    showStars.push(<FaRegStar key={`empty-${i}`} />);
  }

  return (
    <div>
      {showStars}
      {totalReviews && " " + totalReviews + " Reviews"}
    </div>
  );
};
