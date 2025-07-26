import { useEffect, useState } from "react";
import { validator } from "../utils/validator.js";

const handleOnChange = ({ e, form, setForm }) => {
  let { checked, name, value } = e.target;

  if (name === "status") {
    value = checked ? "active" : "inactive";
  }

  setForm({
    ...form,
    [name]: value,
  });
};

const useForm = (initial) => {
  const [form, setForm] = useState(initial);
  const [passwordErrors, setPasswordErrors] = useState([]);

  // only when password and confirmPassword changes
  useEffect(() => {
    const errorArg = validator(form?.password, form?.confirmPassword);
    setPasswordErrors(errorArg);
  }, [form?.password, form?.confirmPassword]);

  return {
    form,
    setForm,
    passwordErrors,
    handleOnChange: (e) => handleOnChange({ e, form, setForm }),
  };
};

export default useForm;
