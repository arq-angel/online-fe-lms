import Form from "react-bootstrap/Form";
import { CustomInput } from "@components/customInput/CustomInput.jsx";
import { newBookInputs } from "@assets/customInputs/formInputs.js";
import Button from "react-bootstrap/Button";
import useForm from "@hooks/useForm.js";
import { postNewBookAction } from "@features/book/bookAction.js";
import { useState } from "react";

const initialState = {
  title: "",
  year: "",
  author: "",
  isbn: "",
  genre: "",
  description: "",
};

const NewBookForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);
  const [image, setImage] = useState();

  const handleOnImageSelect = (e) => {
    setImage(e.target.files[0]);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (const key in form) {
      formData.append(key, form[key]);
    }
    formData.append("image", image);

    const response = await postNewBookAction(formData);

    response?.status === "success" && setForm({});
  };

  return (
    <div className="p-4">
      <Form className="m-2" onSubmit={handleOnSubmit}>
        {newBookInputs.map((input) => (
          <CustomInput
            key={input.name}
            {...input}
            onChange={handleOnChange}
            value={form[input.name] || ""}
          />
        ))}

        <Form.Group className="mb-3">
          <Form.Control
            onChange={handleOnImageSelect}
            type="file"
            name="image"
            accept="image/*"
          />
        </Form.Group>

        <div className="d-grid">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default NewBookForm;
