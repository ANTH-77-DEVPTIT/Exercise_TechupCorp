import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../styleSheet/layout.css";
const Layout = () => {
  return (
    <>
      <nav className="navBar">
        <div className='logo'>
          <Link to="/">APT2</Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/channel">MyChannel</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
