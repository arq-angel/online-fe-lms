import { Star } from "../star/Star";
import { formatDistance, formatDistanceToNow, subDays } from "date-fns";

const reviews = [
  {
    title: "A Must-Read for Every History Buff",
    rating: 4.8,
    details:
      "An engaging and well-researched narrative that kept me hooked from start to finish. The author has a gift for making historical events feel personal and impactful.",
    reviewedBy: "Alice Thompson",
    createdAt: "2023-10-01",
  },
  {
    title: "Not What I Expected, But Still Good",
    rating: 3.7,
    details:
      "The storyline took a while to build up, but once it did, it was worth it. Some parts felt a bit drawn out, but the ending was satisfying.",
    reviewedBy: "Marcus Lee",
    createdAt: "2022-08-03",
  },
  {
    title: "Brilliant Characters and Sharp Writing",
    rating: 5.0,
    details:
      "This is one of those rare books where every character feels real. The dialogues are sharp, the plot is tight, and I couldn’t put it down.",
    reviewedBy: "Sophie Nguyen",
    createdAt: "2024-04-05",
  },
  {
    title: "Decent Read for a Rainy Weekend",
    rating: 4.0,
    details:
      "Not groundbreaking, but enjoyable. The pacing was consistent, and the setting was immersive. Good pick if you're looking for something light but thoughtful.",
    reviewedBy: "David Miller",
    createdAt: "2023-05-13",
  },
  {
    title: "Inspiring and Thought-Provoking",
    rating: 4.6,
    details:
      "This book challenged my perspectives in a really positive way. It's one I’ll be recommending to friends and revisiting myself in the future.",
    reviewedBy: "Priya Shah",
    createdAt: "2023-08-18",
  },
  {
    title: "Overhyped but Still Enjoyable",
    rating: 3.9,
    details:
      "I picked this up because of all the buzz, and while it didn’t fully live up to the hype for me, it was still a solid, enjoyable read overall.",
    reviewedBy: "Liam O’Connor",
    createdAt: "2022-09-19",
  },
];

export const Reviews = () => {
  return (
    <div className="reviews-tab">
      {reviews.length > 0 &&
        reviews.map((r, i) => (
          <div
            key={i}
            className="border rounded p-3 shadow-lg d-flex review-item gap-2"
          >
            <div className="left d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center fs-3 fw-bold ">
                JD
              </div>
            </div>
            <div className="right">
              <h3>{r.title}</h3>
              <div className="d-flex gap-3">
                <Star avgRating={r.rating} />{" "}
                <span>
                  {formatDistanceToNow(new Date(r.createdAt), {
                    addSuffix: true,
                  })}
                </span>
              </div>
              <p>{r.details}</p>
              <div className="text-end"> - {r.reviewedBy}</div>
            </div>
          </div>
        ))}
    </div>
  );
};
