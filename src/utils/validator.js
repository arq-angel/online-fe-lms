//validate:
// - 1 at least 6 chatacters
// - 1 uppercase
// - 1 lowercase
// - 1 digit
// - special character !@#$5^&*()<>?{}|
// - password must match

export const validator = (password = "", confirmPassword = "") => {
  const error = [];

  password?.length < 6 && error.push("At least 6 characters required");

  !/[A-Z]/.test(password) &&
    error.push("Password must contain atleast one UPPERCASE LETTER");

  !/[a-z]/.test(password) &&
    error.push("Password must contain atleast one lowercase letter");

  !/[0-9]/.test(password) &&
    error.push("Password must contain atleast one number");

  !/[!@#$5^&*()<>?{}|]/.test(password) &&
    error.push(
      "Password must contain atleast one of special character !@#$5^&*()<>?{}|"
    );

  !(password === confirmPassword) && error.push("Password do not match");

  return error;
};
