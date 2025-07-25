import Form from "react-bootstrap/Form";
import { CustomInput } from "@components/customInput/CustomInput.jsx";
import { newBookInputs } from "@assets/customInputs/formInputs.js";
import Button from "react-bootstrap/Button";
import useForm from "@hooks/useForm.js";
import { postNewBookAction } from "@features/book/bookAction.js";

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
  const { form, setForm, handleOnChange } = useForm(initialState);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    console.log(form);

    const response = await postNewBookAction(form);

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

        <div className="d-grid">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default NewBookForm;
