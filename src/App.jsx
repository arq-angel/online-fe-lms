import "./App.css";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/AppRoutes.jsx";

const App = () => {
  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
};

export default App;
