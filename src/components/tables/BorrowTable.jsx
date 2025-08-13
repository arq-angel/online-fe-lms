import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  getAllBorrowsAction,
  returnBorrowAction,
} from "../../features/borrow/borrowAction";

export const BorrowTable = ({ isAdmin }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const dispatch = useDispatch();
  const { allBorrows, myBorrows } = useSelector((state) => state.borrowInfo);

  const borrowSource = isAdmin ? allBorrows : myBorrows;

  useEffect(() => {
    dispatch(getAllBorrowsAction(isAdmin));
  }, [dispatch, isAdmin]);

  const handleOnSearch = (e) => {
    console.log(e.target.value);
  };

  const handleOnBookReturn = (_id) => {
    if (confirm("Are you sure you want to return this book?")) {
      dispatch(returnBorrowAction({ _id }));
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <div>{borrowSource.length} Book(s) found!</div>
        <div>
          <Form.Control
            placeholder="Search book by name"
            onChange={handleOnSearch}
          />
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            {!pathname.includes("my-borrow") && <th>Status</th>}
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Due</th>
            <th>Returned Date</th>
            {!pathname.includes("borrow-history") && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {borrowSource.length > 0 &&
            borrowSource.map(
              (
                {
                  _id,
                  bookTitle,
                  bookSlug,
                  thumbnail,
                  dueDate,
                  isReturned,
                  returnedDate,
                  reviewId,
                },
                i
              ) => (
                <tr key={_id}>
                  <td>{i + 1}</td>
                  {!pathname.includes("my-borrow") && (
                    <td>
                      {isReturned ? "Returned" : "Borrowed"}
                      {reviewId && " & left review"}
                    </td>
                  )}
                  <td>
                    <img
                      src={import.meta.env.VITE_API_URL + thumbnail.slice(6)}
                      alt=""
                      width="100px"
                    />
                  </td>
                  <td>
                    <a href={`/book/${bookSlug}`} target="_blank">
                      {bookTitle}
                    </a>
                  </td>
                  <td>{dueDate.slice(0, 10)}</td>
                  <td>{isReturned ? returnedDate : "Not yet"}</td>
                  {!pathname.includes("borrow-history") && (
                    <td>
                      {!isReturned && (
                        <Button
                          variant="warning"
                          onClick={() => handleOnBookReturn(_id)}
                        >
                          Return Book
                        </Button>
                      )}
                      {isReturned && !reviewId && (
                        <Button variant="success">Leave Review</Button>
                      )}
                      {reviewId && "Reviewed"}
                    </td>
                  )}
                </tr>
              )
            )}
        </tbody>
      </Table>
    </div>
  );
};
