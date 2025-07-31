import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { CustomInput } from "@components/customInput/CustomInput.jsx";
import useForm from "@hooks/useForm.js";
import { signinUserApi } from "@services/authAPI.js";
import { autoLoginUser, fetchUserAction } from "@features/user/userAction.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const initialState = {
  email: "",
  password: "",
};

const SignInPage = () => {
  const { form, handleOnChange } = useForm(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showLoaderRef = useRef(true);
  const location = useLocation();

  const { user } = useSelector((state) => state.userInfo);

  const path = location?.state?.from ?? "/user";
  useEffect(() => {
    user?._id ? navigate(path) : dispatch(autoLoginUser());

    if (
      sessionStorage.getItem("accessJWT") ||
      localStorage.getItem("refreshJWT")
    ) {
      setTimeout(() => {
        showLoaderRef.current = false;
      }, 2000);
    } else {
      showLoaderRef.current = false;
    }
  }, [user?._id, navigate, dispatch, path]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (form.email && form.password) {
      const { payload } = await signinUserApi(form);

      if (payload?.accessJWT) {
        sessionStorage.setItem("accessJWT", payload?.accessJWT);
        localStorage.setItem("refreshJWT", payload?.refreshJWT);

        // call api to get user profile
        dispatch(fetchUserAction());
      }
    } else {
      alert("Both input must be filled");
    }
  };

  if (showLoaderRef.current) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="signin-page d-flex justify-content-center align-items-center">
      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title>Welcome Back to the Library</Card.Title>
          <hr />
          <Form action="" onSubmit={handleOnSubmit}>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              placeholder="name@email.com"
              required
              onChange={handleOnChange}
              value={form.email || ""}
            />
            <CustomInput
              label="Password"
              name="password"
              type="password"
              placeholder="*********"
              required
              onChange={handleOnChange}
              value={form.password || ""}
            />
            <div className="d-grid">
              <Button type="submit">Sign In</Button>
            </div>
          </Form>
          <hr />

          <div className="text-end my-3">
            Forget Password? <a href="/forget-password">Reset Now</a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignInPage;
