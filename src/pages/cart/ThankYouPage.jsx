import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { emptyRecentBorrow } from "../../features/cart/cartSlice";

const ThankYouPage = () => {
  const dispatch = useDispatch();
  const { recentBorrow } = useSelector((state) => state.cartInfo);

  console.log(recentBorrow);

  useEffect(() => {
    // logic...

    return () => {
      // only execute on unmount
      import.meta.env.PROD && dispatch(emptyRecentBorrow());
    };
  }, [dispatch]);

  return (
    <Container className="mb-3">
      <Row>
        <Col>
          <Alert variant="success " className=" mt-5">
            <h1 className="text-center">Thank you</h1>
          </Alert>
          <div className="text-center">
            <Link to="/user/my-borrow">
              Go to your account to view your borrow list
            </Link>
          </div>

          <div className="mt-5">
            <Table>
              <tbody>
                {recentBorrow?.length > 0 &&
                  recentBorrow.map((borrow) => (
                    <tr key={borrow?._id}>
                      <td>
                        <img
                          src={
                            import.meta.env.VITE_API_URL +
                            borrow?.thumbnail.slice(6)
                          }
                          alt=""
                          width="70px"
                        />
                      </td>
                      <td>{borrow?.bookTitle}</td>
                      <td>ID: {borrow.bookId}</td>
                      <td>Returning: {borrow?.dueDate.slice(0, 10)}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ThankYouPage;
