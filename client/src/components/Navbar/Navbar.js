import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends React.Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    //GuestLink OffLinks an GuestLink
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/upcoming"> Upcoming Movies </Link>
        </li>

        {/* <form className="navbar-form navbar-left">
          <input className="form-control" placeholder="Search" />
          <button className="btn navbar-btn button">Search</button>
        </form> */}
        <li className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "50px", marginRight: "5px" }}
              title="You must have a Gravatar connected to your email to display an image"
            />
            <span className="glyphicon glyphicon-log-out" /> Logout{" "}
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li>
          <Link to="/">
            <span className="glyphicon glyphicon-user" /> Sign Up
          </Link>
        </li>
        <li>
          <Link to="/login">
            <span className="glyphicon glyphicon-log-in" /> Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar-inverse ">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/landing">
              <img
                src={logo}
                className="navbar-brand icon-rotate"
                style={{ height: "70px" }}
              />
            </Link>
          </div>

          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
