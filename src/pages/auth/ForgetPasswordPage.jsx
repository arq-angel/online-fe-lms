import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { CustomInput } from "@components/customInput/CustomInput.jsx";
import { useEffect, useRef, useState } from "react";
import useForm from "@hooks/useForm.js";
import {
  requestPassResetOTPApi,
  resetPasswordApi,
} from "../../services/authAPI";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";

const initialState = {
  otp: "",
  password: "",
  confirmPassword: "",
};
const timeToRequestOTPAgain = 20; //s

const ForgetPasswordPage = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const [showPassResetForm, setShowPassResetForm] = useState(false);
  const [isOtpPending, setIsOtpPending] = useState(false);
  const [isOtpButtonDisabled, setIsOtpButtonDisabled] = useState(false);

  const [counter, setCounter] = useState(0);

  const { form, setForm, passwordErrors, handleOnChange } =
    useForm(initialState);

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setIsOtpButtonDisabled(false);
    }
  }, [counter]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    // call api
    setIsOtpPending(true);
    setIsOtpButtonDisabled(true);

    const response = await requestPassResetOTPApi({ email });

    if (response?.status === "success") {
      setIsOtpPending(false);
      setCounter(timeToRequestOTPAgain);
      setShowPassResetForm(true);
    }
  };

  const handleOnPasswordResetSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const payload = {
      email,
      otp: form.otp,
      password: form.password,
    };

    // call api
    const response = await resetPasswordApi(payload);

    if (response?.status === "success") {
      // redirect user to login page in 3s

      setTimeout(() => {
        navigate("/login");
      }, 3000); // 3s
    }
  };

  return (
    <div className="signin-page d-flex justify-content-center align-items-center">
      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title>Forgot Password?</Card.Title>

          <>
            <p>
              Don't worry. Fill up the form below to request OTP to reset your
              password.
            </p>
            <hr />

            <Form action="" onSubmit={handleOnSubmit}>
              <CustomInput
                label="Email"
                name="email"
                type="email"
                placeholder="name@email.com"
                required
                passRef={emailRef}
              />
              <div className="d-grid">
                <Button type="submit" disabled={isOtpButtonDisabled}>
                  {isOtpPending ? (
                    <Spinner variant="border" />
                  ) : counter > 0 ? (
                    `Request OTP in ${counter}`
                  ) : (
                    "Request OTP"
                  )}
                </Button>
              </div>
            </Form>
          </>

          {showPassResetForm && (
            <>
              <hr />

              {/* show this form below once otp is requested */}
              <div>
                <Alert variant="success">
                  We will send you an OTP to your email, if email is found in
                  our system. Please check your junk/spam folder if you don't
                  see email in the inbox.
                </Alert>
                <Form action="" onSubmit={handleOnPasswordResetSubmit}>
                  <CustomInput
                    label="OTP"
                    name="otp"
                    type="number"
                    placeholder="2345"
                    required
                    value={form.otp || ""}
                    onChange={handleOnChange}
                  />
                  <CustomInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="**********"
                    required
                    value={form.password || ""}
                    onChange={handleOnChange}
                  />
                  <CustomInput
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="**********"
                    required
                    value={form.confirmPassword || ""}
                    onChange={handleOnChange}
                  />

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

                  <div className="d-grid">
                    <Button type="submit" disabled={passwordErrors.length}>
                      Reset Password
                    </Button>
                  </div>
                </Form>
              </div>
            </>
          )}

          <div className="text-end my-3">
            Ready to login? <a href="/login">Login Now</a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ForgetPasswordPage;
