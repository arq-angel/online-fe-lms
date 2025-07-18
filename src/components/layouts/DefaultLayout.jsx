import { Outlet } from "react-router-dom";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";

export const DefaultLayout = () => {
  return (
    <div>
      {/* navbar */}
      <Header />

      {/* main body */}
      <main className="main">
        <Outlet />
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
};
