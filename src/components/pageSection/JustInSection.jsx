import { CustomCard } from "../customCard/CustomCard";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { useSelector } from "react-redux";

export const JustInSection = () => {
  const { publicBooks } = useSelector((state) => state.bookInfo);

  let books = [];
  if (publicBooks.length) {
    const sorted = [...publicBooks].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    books = sorted.slice(0, 4);
  }

  return (
    <div>
      <SectionTitle title="Just in!" />
      <div className="d-flex gap-2 justify-content-center flex-wrap">
        {books.length > 0 &&
          books.map((book) => <CustomCard key={book._id} {...book} />)}
      </div>
    </div>
  );
};
