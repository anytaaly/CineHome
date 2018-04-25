import React from "react";
import "./Navs.css";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

class Navs extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse ">
        <div className="container-fluid">
          <div className="navbar-header">
            <img
              src={logo}
              className="navbar-brand icon-rotate"
              style={{ height: "70px" }}
            />
          </div>
          <ul className="nav navbar-nav">
            <li
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/home"
                  ? "nav-item active"
                  : "nav-item "
              }
              id="navs"
            >
              <Link to="/" className="nav-link">
                {" "}
                Home{" "}
              </Link>
            </li>

            <li
              className={
                window.location.pathname === "/upcoming"
                  ? "nav-item active "
                  : "nav-item"
              }
              id="navs"
            >
              <Link to="/upcoming"> Upcoming Movies </Link>
            </li>
          </ul>

          <form className="navbar-form navbar-left">
            <input className="form-control" placeholder="Search" />
            <button className="btn navbar-btn button">Search</button>
          </form>

          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/landing">
                <span className="glyphicon glyphicon-user" /> Sign Up
              </Link>
            </li>
            <li>
              <Link to="/login">
                <span className="glyphicon glyphicon-log-in" /> Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navs;
