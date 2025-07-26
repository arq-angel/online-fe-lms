import { EditBookForm } from "@components/forms";
import Button from "react-bootstrap/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteBookApi } from "@features/book/bookAPI.js";

const EditBookPage = () => {
  const navigate = useNavigate();
  const { _id } = useParams();

  const handleOnDelete = async () => {
    if (
      confirm(
        "Are you sure you want to delete this book? This can't be undone."
      )
    ) {
      const result = await deleteBookApi(_id);

      result.status === "success" && navigate("/user/books");
    }
  };

  return (
    <div className="p-3">
      <h3>Edit Book</h3>
      <hr />

      <Link to="/user/books">
        <Button variant="secondary">&lt; Back</Button>
      </Link>

      <div>
        <EditBookForm />
      </div>

      <div className="ms-4 ps-2">
        <Button variant="danger" onClick={handleOnDelete}>
          Delete this book
        </Button>
      </div>
    </div>
  );
};

export default EditBookPage;
