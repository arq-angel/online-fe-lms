import Form from "react-bootstrap/Form";

export const CustomInput = ({ label, passRef, value, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...rest}
        {...(!passRef && { value: value || "" })}
        ref={passRef}
      />
    </Form.Group>
  );
};
