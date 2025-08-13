import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchSinglePublicBookAction } from "../../features/book/bookAction";
import { Star } from "../../components/star/Star";
import { Reviews } from "../../components/reviews/Reviews";
import { setCart } from "../../features/cart/cartSlice.js";
import { toast } from "react-toastify";

const BookLandingPage = () => {
  const [book, setBook] = useState({});
  const [showUrl, setShowUrl] = useState(0);

  const [showSpinner, setShowSpinner] = useState(true);
  const dispatch = useDispatch();

  const { slug } = useParams();
  const { selectedBook } = useSelector((state) => state.bookInfo);
  const { cart } = useSelector((state) => state.cartInfo);

  useEffect(() => {
    // first approach, locally
    // const selectedBook = publicBooks?.find((book) => book.slug === slug);
    // setBook(selectedBook);

    // second approach, fetch from live server

    dispatch(fetchSinglePublicBookAction(slug));
  }, [dispatch, slug]);

  const handleOnAddToCart = () => {
    toast.success("Book is added in the cart");
    dispatch(setCart(selectedBook));
  };

  const isBookInCart = cart.find((item) => item?._id === selectedBook?._id);

  useEffect(() => {
    if (selectedBook?._id) {
      setBook(selectedBook);
      setShowSpinner(false);
    }
  }, [selectedBook]);

  return (
    <Container>
      <Row className="my-3">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/all-books" }}>
              All Books
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{selectedBook?.title}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      {showSpinner && (
        <div className="d-flex align-items-center justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}

      {!showSpinner && !selectedBook?._id && (
        <Row>
          <Col>
            <Alert variant="danger">
              This book is not available, please contact Admin!
            </Alert>
          </Col>
        </Row>
      )}

      {!showSpinner && selectedBook?._id && (
        <>
          <Row>
            <Col md={4}>
              <div className="mb-4" style={{ height: "400px" }}>
                <img
                  src={
                    import.meta.env.VITE_API_URL +
                    selectedBook?.imageList[showUrl]?.slice(6)
                  }
                  alt={selectedBook?.title}
                  // width={"100%"}
                  className="h-100 w-100 object-fit-contain"
                />
              </div>

              {/* scrollable thumbnails  */}
              <div className="d-flex overflow-auto gap-2 py-3">
                {selectedBook?.imageList?.length > 0 &&
                  selectedBook.imageList.map((url, index) => (
                    <img
                      key={index}
                      src={import.meta.env.VITE_API_URL + url.slice(6)}
                      width="80px"
                      className="img-thumbnail"
                      onClick={() => setShowUrl(index)}
                    />
                  ))}
              </div>
            </Col>
            <Col>
              <div className="d-flex h-100 flex-column justify-content-between ">
                <div className="top">
                  <h1>{selectedBook?.title}</h1>
                  <div className="fw-bolder">
                    {selectedBook?.author} - {selectedBook?.year}
                  </div>
                  <div className="my-3 d-flex gap-2">
                    <span>{selectedBook?.genre}</span> |
                    <Star
                      avgRating={selectedBook?.averageRating}
                      totalReviews={22}
                    />
                  </div>
                  <div>{selectedBook?.description.slice(0, 300)}...</div>
                </div>
                <div className="bottom">
                  <hr />
                  <div className="d-grid">
                    <Button
                      onClick={handleOnAddToCart}
                      variant="dark"
                      disabled={isBookInCart || selectedBook.expectedAvailable}
                    >
                      {selectedBook.expectedAvailable
                        ? `Expected Available: ${selectedBook.expectedAvailable.slice(
                            0,
                            10
                          )}`
                        : isBookInCart
                        ? "Book is already in the cart"
                        : "Add to Borrowing List"}
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="my-5">
            <Col className="border p-3">
              <h3 className="m-auto mt-2 text-center">More Details</h3>
              <Tabs
                defaultActiveKey="description"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="description" title="Description">
                  <div>{selectedBook?.description}</div>
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                  <Reviews />
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default BookLandingPage;
