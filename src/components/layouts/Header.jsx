import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineLogin } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";

export const Header = () => {
  return (
    <Navbar expand="md" className="bg-dark " variant="dark">
      <Container>
        <Link className="navbar-brand" to="/">
          LMS
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              <div className="d-flex align-items-center gap-1">
                <IoHomeSharp /> Home
              </div>
            </Link>
            <Link className="nav-link" to="/signup">
              <div className="d-flex align-items-center gap-1">
                <HiOutlinePencilAlt /> Sign Up
              </div>
            </Link>
            <Link className="nav-link" to="/login">
              <div className="d-flex align-items-center gap-1">
                <MdOutlineLogin /> Login
              </div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
