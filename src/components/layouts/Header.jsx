import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineLogin } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logoutApi } from "../../services/authAPI.js";
import { setUser } from "../../features/user/userSlice.js";
import { FaSearch } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { useRef } from "react";

export const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const searchRef = useRef("");
  const navigate = useNavigate();

  const handleOnLogout = () => {
    // logout from backend
    logoutApi();

    // logout from front end
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");

    // reset the user state
    dispatch(setUser({}));
  };

  const handleOnSearch = (e) => {
    e.preventDefault();
    const str = searchRef.current.value;
    str && navigate("/search?query=" + str);
  };

  return (
    <Navbar expand="md" className="bg-dark " variant="dark">
      <Container>
        <Link className="navbar-brand" to="/">
          LMS
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex w-100 justify-content-between flex-column flex-md-row">
            <Form
              style={{ width: "40%" }}
              className="m-auto"
              onSubmit={handleOnSearch}
            >
              <InputGroup className="">
                <Form.Control
                  placeholder="Search your book"
                  aria-label="Search your book"
                  aria-describedby="Search your book"
                  name="s"
                  ref={searchRef}
                />
                <InputGroup.Text
                  id="basic-addon2"
                  style={{ cursor: "pointer" }}
                  as="button"
                >
                  <FaSearch />
                </InputGroup.Text>
              </InputGroup>
            </Form>
            <Nav>
              <Link className="nav-link" to="/">
                <div className="d-flex align-items-center gap-1">
                  <IoHomeSharp /> Home
                </div>
              </Link>
              <Link className="nav-link" to="/all-books">
                <div className="d-flex align-items-center gap-1">
                  <ImBooks /> Books
                </div>
              </Link>
              {user?._id ? (
                <>
                  <Link className="nav-link" to="/user">
                    <div className="d-flex align-items-center gap-1">
                      <MdDashboard /> Dashboard
                    </div>
                  </Link>
                  <Link className="nav-link" to="/" onClick={handleOnLogout}>
                    <div className="d-flex align-items-center gap-1">
                      <IoExitOutline /> Logout
                    </div>
                  </Link>
                </>
              ) : (
                <>
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
                </>
              )}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
