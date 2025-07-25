import Button from "react-bootstrap/Button";
import { BookTable } from "@components/tables/BookTable";
import { useEffect } from "react";
import { adminFetchAllBookAction } from "../../features/book/bookAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(adminFetchAllBookAction());
  }, [dispatch]);

  return (
    <div className="p-3">
      <h3>Books</h3>
      <hr />
      <div className="text-end">
        <Link to="/user/new-book">
          <Button>Add New Book</Button>
        </Link>
      </div>

      <div className="mt-4">
        <BookTable />
      </div>
    </div>
  );
};

export default Books;
