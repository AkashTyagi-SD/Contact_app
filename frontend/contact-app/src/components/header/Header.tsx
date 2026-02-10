import { FC } from "react";
import { Link } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout } from "../../store/slices/auth/auth.slice";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const authStore = useAppSelector((state) => state.auth);
  const { isAuthenticated } = authStore;

  const logoutUser = () => {
    // Dispatch logout action
    dispatch(logout());
  };

  return (
    <header className="header-container">
      <h1 className="header-title">Welcome to CMA</h1>

      {isAuthenticated ? (
        <div className="button-container">
          <button className="login-button" onClick={logoutUser}>
            Logout
          </button>
        </div>
      ) : (
        <div className="button-container">
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
          <Link to="/sign-up">
            <button className="login-button">Sign Up</button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
