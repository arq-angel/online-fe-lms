import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeBookFromCart,
  setRecentBorrow,
  emptyCart,
} from "../../features/cart/cartSlice.js";
import { postBorrowApi } from "@features/cart/cartAPI.js";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cart } = useSelector((state) => state.cartInfo);
  const { user } = useSelector((state) => state.userInfo);

  console.log(cart);

  const handleOnRemove = (_id) => {
    console.log(_id);
    dispatch(removeBookFromCart(_id));
  };

  const handleOnBorrow = async () => {
    if (confirm("Are you sure you want to borrow the books?")) {
      // 1. have an API to send user and the cart book list to create
      //    new borrowing transaction in the database
      const booksArg = cart.map(({ _id, title, slug, imgUrl }) => {
        return {
          bookId: _id,
          bookTitle: title,
          bookSlug: slug,
          thumbnail: imgUrl,
        };
      });

      console.log(booksArg);

      const pending = postBorrowApi(booksArg);
      toast.promise(pending, {
        pending: "Please wait...",
      });

      const { status, message, payload } = await pending;

      toast[status](message);
      // 2. store the payload coming from server
      dispatch(setRecentBorrow(payload));

      // 3. clear cart state
      dispatch(emptyCart());

      // 4. send user to thank you page
      navigate("/user/thank-you");
    }
  };

  return (
    <Container className="mb-3">
      <Row>
        <Col>
          <h1 className="py-5">My Borrowing list</h1>

          <div>
            <Table>
              <tbody>
                {cart.map((book) => (
                  <tr key={book?._id}>
                    <td>
                      <img
                        src={
                          import.meta.env.VITE_API_URL + book?.imgUrl.slice(6)
                        }
                        alt=""
                        width="100px"
                      />
                    </td>
                    <td>{book?.title}</td>
                    <td>Returning: 15-05-2025</td>
                    <td>
                      <Button
                        onClick={() => handleOnRemove(book?._id)}
                        variant="link"
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {cart.length > 0 ? (
              <div className="text-end">
                {user._id ? (
                  <Button onClick={handleOnBorrow} variant="dark">
                    Proceed to Borrow
                  </Button>
                ) : (
                  <Link to="/login" state={{ from: "/cart" }}>
                    <Button variant="dark">Login to borrow</Button>
                  </Link>
                )}
              </div>
            ) : (
              <Alert variant="info">No book is in the cart</Alert>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
