import { FC } from "react";
import { Link } from "react-router";

const Header: FC = () => {
  return (
    <header className="header-container">
      <h1 className="header-title">Welcome to CMA</h1>
      <div className="button-container">
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
        <Link to="/sign-up">
          <button className="login-button">Sign Up</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
