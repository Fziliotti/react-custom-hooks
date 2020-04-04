import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="menu-lateral">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/use-giphy">use-giphy</Link>
        </li>
        <li>
          <Link to="/use-router">use-router</Link>
        </li>
        <li>
          <Link to="/use-async">use-async</Link>
        </li>
        <li>
          <Link to="/use-posts">use-posts</Link>
        </li>
        <li>
          <Link to="/use-hover">react-hover </Link>
        </li>

        <li>
          <Link to="/use-react-hook-form">use-react-hook-form</Link>
        </li>
        <li>
          <Link to="/use-react-use-lib">react-use-library </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
