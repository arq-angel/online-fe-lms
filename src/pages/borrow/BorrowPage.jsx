import { useSelector } from "react-redux";
import { BorrowTable } from "../../components/tables/BorrowTable";

const BorrowPage = () => {
  const { user } = useSelector((state) => state.userInfo);
  const isAdmin = user?.role === "admin";

  return (
    <div className="p-3">
      <h3>All Borrows</h3>
      <hr />

      <div className="all-borrow-table">
        <BorrowTable isAdmin={isAdmin} />
      </div>
    </div>
  );
};

export default BorrowPage;
