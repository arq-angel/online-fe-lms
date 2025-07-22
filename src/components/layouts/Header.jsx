import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineLogin } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logoutApi } from "../../services/authAPI.js";
import { setUser } from "../../features/user/userSlice.js";

export const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const handleOnLogout = () => {
    // logout from backend
    logoutApi();

    // logout from front end
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");

    // reset the user state
    dispatch(setUser({}));
  };

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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
