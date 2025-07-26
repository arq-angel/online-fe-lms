import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const BookTable = () => {
  const { books } = useSelector((state) => state.bookInfo);

  const [displayBooks, setDisplayBooks] = useState([]);

  useEffect(() => {
    setDisplayBooks(books);
  }, [books]);

  const handleOnSearch = (e) => {
    const { value } = e.target;
    setDisplayBooks(
      books.filter((book) =>
        book.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <div>{displayBooks.length} Book(s) found!</div>
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
            <th>Status</th>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>Is available?</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {displayBooks.length > 0 &&
            displayBooks.map(
              (
                { _id, status, title, imgUrl, available, expectedAvailable },
                i
              ) => (
                <tr key={_id}>
                  <td>{i + 1}</td>
                  <td
                    className={
                      status === "active" ? "text-success" : "text-danger"
                    }
                  >
                    {status}
                  </td>
                  <td>
                    <img src={imgUrl} alt="" width="100px" />
                  </td>
                  <td>{title}</td>
                  <td>
                    {available
                      ? "Yes"
                      : !available && expectedAvailable
                      ? `From: ${expectedAvailable.slice(0, 10)}`
                      : "N/A"}
                  </td>
                  <td>
                    <Link to={`/user/edit-book/${_id}`}>
                      <Button variant="warning">Edit</Button>
                    </Link>
                  </td>
                </tr>
              )
            )}
        </tbody>
      </Table>
    </div>
  );
};
