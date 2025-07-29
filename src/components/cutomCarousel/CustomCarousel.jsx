import Carousel from "react-bootstrap/Carousel";
import library_01 from "@assets/img/library_01.jpg";
import library_02 from "@assets/img/library_02.jpg";
import library_03 from "@assets/img/library_03.jpg";

const carouselContent = [
  {
    id: 1,
    imgSrc: library_01,
    title: "Discover Your Next Favorite Book",
    caption:
      "Browse our diverse collection of literature, from timeless classics to modern bestsellers. There’s something here for every reader.",
  },
  {
    id: 2,
    imgSrc: library_02,
    title: "Quiet Spaces for Focus and Study",
    caption:
      "Enjoy a peaceful atmosphere perfect for reading, studying, or working on your next big project.",
  },
  {
    id: 3,
    imgSrc: library_03,
    title: "A Place to Learn, Grow, and Connect",
    caption:
      "Attend workshops, join community events, or explore new skills — the library is more than just books.",
  },
];

export const CustomCarousel = () => {
  return (
    <Carousel className="mt-4">
      {carouselContent.length > 0 &&
        carouselContent.map((item) => (
          <Carousel.Item key={item.id}>
            <img src={item.imgSrc} alt="First slide" />
            <Carousel.Caption className="carousel-caption-bg rounded p-2">
              <h3>{item.title}</h3>
              <hr />
              <p>{item.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};
