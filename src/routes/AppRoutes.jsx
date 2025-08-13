import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  DashboardPage,
  SignUpPage,
  VerifyUser,
  SignInPage,
  ForgetPasswordPage,
  Books,
  NewBookPage,
  EditBookPage,
  BookLandingPage,
  ReviewsPage,
  UserPage,
  Profile,
  BorrowPage,
  AllBooks,
  Search,
  Cart,
  ThankYouPage,
} from "@pages";
import { DefaultLayout } from "@components/layouts/DefaultLayout";
import { UserLayout } from "@components/layouts/UserLayout";
import { useSelector } from "react-redux";

const noAccess = (
  <div className="mt-5 text-center">
    <h1>You do not have permission to access this page.</h1>
  </div>
);
const AppRoutes = () => {
  const { user } = useSelector((state) => state.userInfo);
  const isAdmin = user?.role === "admin";

  return (
    <Routes>
      {/* Public pages */}
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="all-books" element={<AllBooks />} />
        <Route path="search" element={<Search />} />
        <Route path="book/:slug" element={<BookLandingPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="activate-user" element={<VerifyUser />} />
        <Route path="login" element={<SignInPage />} />
        <Route path="forget-password" element={<ForgetPasswordPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Route>

      {/* Private pages */}
      <Route path="/user" element={<UserLayout />}>
        {/* all users list */}
        <Route index element={<DashboardPage />} />
        <Route path="my-borrow" element={<BorrowPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="thank-you" element={<ThankYouPage />} />

        {/* only admin access pages  */}
        <Route path="books" element={isAdmin ? <Books /> : noAccess} />
        <Route path="new-book" element={isAdmin ? <NewBookPage /> : noAccess} />
        <Route
          path="edit-book/:_id"
          element={isAdmin ? <EditBookPage /> : noAccess}
        />
        <Route
          path="borrow-history"
          element={isAdmin ? <BorrowPage /> : noAccess}
        />
        <Route path="reviews" element={isAdmin ? <ReviewsPage /> : noAccess} />
        <Route path="all" element={isAdmin ? <UserPage /> : noAccess} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
