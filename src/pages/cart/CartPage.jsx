import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeBookFromCart } from "../../features/cart/cartSlice.js";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartInfo);
  const { user } = useSelector((state) => state.userInfo);

  console.log(cart);

  const handleOnRemove = (_id) => {
    console.log(_id);
    dispatch(removeBookFromCart(_id));
  };

  const handleOnBorrow = () => {
    if (confirm("Are you sure you want to borrow the books?")) {
      // TODO
      // 1. have an API to send user and the cart book list to create
      //    new borrowing transaction in the database
      // 2. clear cart state
      // 3. send user to thank you page
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
