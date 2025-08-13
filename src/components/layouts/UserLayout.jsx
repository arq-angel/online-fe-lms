import { Outlet } from "react-router-dom";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import { Sidebar } from "./Sidebar.jsx";
import { AuthRoute } from "../auth/AuthRoute.jsx";
import { useSelector } from "react-redux";

export const UserLayout = () => {
  const { user } = useSelector((state) => state.userInfo);

  return (
    <AuthRoute>
      {/* navbar */}
      <Header />

      <div className="d-flex">
        <div className="bg-dark text-white p-3" style={{ width: "200px" }}>
          <div className="p-3">
            <div>Welcome back</div>
            <h4>{`${user?.fName} (${user?.role})`}</h4>
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
