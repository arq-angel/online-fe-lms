import "./App.css";
import { ToastContainer } from "react-toastify";
import AppRoutes from "@routes/AppRoutes.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllPublicBookAction } from "./features/book/bookAction.js";

const App = () => {
  const disptach = useDispatch();

  useEffect(() => {
    // fetch all the data then mount in the redux
    disptach(fetchAllPublicBookAction());
  }, [disptach]);

  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
};

export default App;
