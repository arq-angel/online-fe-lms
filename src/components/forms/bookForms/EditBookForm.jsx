import Form from "react-bootstrap/Form";
import { CustomInput } from "@components/customInput/CustomInput.jsx";
import { editBookInputs } from "@assets/customInputs/formInputs.js";
import Button from "react-bootstrap/Button";
import useForm from "@hooks/useForm.js";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { updateBookApi } from "../../../features/book/bookAPI";

const initialState = {
  title: "",
  year: "",
  author: "",
  imgUrl: "",
  isbn: "",
  genre: "",
  description: "",
};

const NewBookForm = () => {
  const { _id } = useParams();
  const navigate = useNavigate();

  const { form, setForm, handleOnChange } = useForm(initialState);

  const { books } = useSelector((state) => state.bookInfo);

  useEffect(() => {
    if (_id !== form._id) {
      const selectedBook = books.find((book) => book._id === _id);

      console.log(selectedBook);
      selectedBook?._id ? setForm(selectedBook) : navigate("/user/books");
    }
  }, [setForm]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const {
      addedBy,
      lastUpdatedBy,
      createdAt,
      updatedAt,
      slug,
      isbn,
      available,
      __v,
      ...rest
    } = form;

    console.log(rest);

    const result = await updateBookApi(rest);
    console.log(result);
  };

  return (
    <div className="p-4">
      <Form className="m-2" onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Check // prettier-ignore
            name="status"
            type="switch"
            id="custom-switch"
            label={form?.status?.toUpperCase()}
            onChange={handleOnChange}
            checked={form?.status === "active"}
          />
        </Form.Group>

        {editBookInputs.map((input) => (
          <CustomInput
            key={input.name}
            {...input}
            onChange={handleOnChange}
            value={form[input.name] || ""}
          />
        ))}

        <div className="mb-3">
          <hr />
          <h4>Additional Info</h4>
          <div className="mb-2">
            Added By: {form?.addedBy?.name} <br />
            Date: {form.createdAt}
          </div>
          <div>
            Last Updated By: {form?.lastUpdatedBy?.name} <br />
            Date: {form.createdAt}
          </div>
        </div>

        <div className="d-grid">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default NewBookForm;
