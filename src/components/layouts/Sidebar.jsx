import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaBookOpen, FaUser, FaUsers, FaComment } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const { user } = useSelector((state) => state.userInfo);
  const isAdmin = user?.role === "admin";

  return (
    <Stack gap={1}>
      <div className="p-2">
        <Link className="nav-link" to="/user">
          <div className="d-flex align-items-center gap-1">
            <MdDashboard /> Dashboard
          </div>
        </Link>
      </div>

      <div className="p-2">
        <Link className="nav-link" to="/user/my-borrow">
          <div className="d-flex align-items-center gap-1">
            <CiViewList /> My Borrow List
          </div>
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/profile">
          <div className="d-flex align-items-center gap-1">
            <FaUser /> Profile
          </div>
        </Link>
      </div>
      {isAdmin && (
        <>
          <div className="p-2">
            <Link className="nav-link" to="/user/books">
              <div className="d-flex align-items-center gap-1">
                <FaBookOpen /> Book
              </div>
            </Link>
          </div>
          <div className="p-2">
            <Link className="nav-link" to="/user/reviews">
              <div className="d-flex align-items-center gap-1">
                <FaComment /> Reviews
              </div>
            </Link>
          </div>
          <div className="p-2">
            <Link className="nav-link" to="/user/all">
              <div className="d-flex align-items-center gap-1">
                <FaUsers /> All Users
              </div>
            </Link>
          </div>
          <div className="p-2">
            <Link className="nav-link" to="/user/borrow-history">
              <div className="d-flex align-items-center gap-1">
                <CiViewList /> Borrow History
              </div>
            </Link>
          </div>
        </>
      )}
    </Stack>
  );
};
