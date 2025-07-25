import { Outlet } from "react-router-dom";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import { Sidebar } from "./Sidebar.jsx";
import { AuthRoute } from "../auth/AuthRoute.jsx";

export const UserLayout = () => {
  return (
    <AuthRoute>
      {/* navbar */}
      <Header />

      <div className="d-flex">
        <div className="bg-dark text-white p-3" style={{ width: "200px" }}>
          <div className="p-3">
            <div>Welcome back</div>
            <h4>Arjun</h4>
          </div>
          <hr />
          <Sidebar />
        </div>
        {/* main body */}
        <main className="user-main">
          <Outlet />
        </main>
      </div>

      {/* footer */}
      <Footer />
    </AuthRoute>
  );
};
