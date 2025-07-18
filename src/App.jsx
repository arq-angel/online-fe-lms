import "./App.css";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { FaHome } from "react-icons/fa";

const App = () => {
  toast("Hellooo");
  return (
    <>
      <h1>Hello World!</h1>
      <FaHome />
      <Button>Click me</Button>
      <ToastContainer />
    </>
  );
};

export default App;
