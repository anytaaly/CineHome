import React from "react";
import "./Landing.css";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div>
                  <img src={logo} id="icon-rotate" />
                </div>
                <h1 className="display-3 mb-4">T-VIEW</h1>
                <p className="lead"> Stream TV and Movies Live Online</p>
                <hr />
                <Link to="/register">
                  <span className="btn btn-lg  mr-2 button"> Sign Up </span>
                </Link>
                <a href="login.html" className="btn btn-lg">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
