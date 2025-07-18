import { Outlet } from "react-router-dom";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Sidebar } from "./Sidebar.jsx";
import { AuthRoute } from "../auth/AuthRoute.jsx";

export const UserLayout = () => {
  return (
    <AuthRoute>
      {/* navbar */}
      <Header />

      <Container fluid>
        <Row>
          <Col md={3} lg={2} className="bg-dark text-white">
            <div className="p-3">
              <div>Welcome back</div>
              <h4>Arjun</h4>
            </div>
            <hr />
            <Sidebar />
          </Col>
          <Col md={9} lg={10}>
            {/* main body */}
            <main className="main">
              <Outlet />
            </main>
          </Col>
        </Row>
      </Container>

      {/* footer */}
      <Footer />
    </AuthRoute>
  );
};
