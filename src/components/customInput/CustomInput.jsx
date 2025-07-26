import Form from "react-bootstrap/Form";

export const CustomInput = ({ label, passRef, value, ...rest }) => {
  let valueData = value;

  if (rest.type === "date") {
    valueData = value ? value.slice(0, 10) : null;
  }

  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...rest}
        {...(!passRef && { value: valueData || "" })}
        ref={passRef}
      />
    </Form.Group>
  );
};
