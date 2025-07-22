import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "@components/customInput/CustomInput";
import { signUpInputs } from "@assets/customInputs/userSignUpInputs";
import useForm from "@hooks/useForm.js";
import { signUpNewUserApi } from "@services/authAPI.js";

const initialState = {
  fName: "",
  lName: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpPage = () => {
  const { form, setForm, passwordErrors, handleOnChange } =
    useForm(initialState);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;

    if (confirmPassword !== form.password)
      return alert("Password do not match");

    const result = await signUpNewUserApi(rest);
    result?.status === "success" && setForm(initialState);
  };

  return (
    <div className="d-flex justify-content-center align-item-center">
      <Form
        style={{ width: "450px" }}
        className="card p-5 my-5 shadow-lg"
        onSubmit={handleOnSubmit}
      >
        <h3>Join our Library Community!</h3>
        <hr />
        {signUpInputs.map((input) => (
          <CustomInput
            key={input.name}
            {...input}
            onChange={handleOnChange}
            value={form[input.name] || ""}
          />
        ))}

        <div className="py-3">
          <ul>
            {form?.password &&
              passwordErrors.length > 0 &&
              passwordErrors.map((msg) => (
                <li key={msg} className="text-danger">
                  {msg}
                </li>
              ))}
          </ul>
        </div>

        <Button
          variant="primary"
          type="submit"
          disabled={passwordErrors.length}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUpPage;
