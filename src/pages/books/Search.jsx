import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { BookListing } from "../../components/bookListing/BookListing.jsx";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const navigate = useNavigate();
  !query && navigate("/");

  const { publicBooks } = useSelector((state) => state.bookInfo);

  const searchBooksArg = publicBooks.filter((book) => {
    const text = (book?.title + " " + book?.description).toLowerCase();

    return text.includes(query.toLowerCase());
  });

  return (
    <Container>
      <Row className="my-3">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/search" }}>
              Search
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <BookListing bookList={searchBooksArg} />
    </Container>
  );
};

export default Search;
