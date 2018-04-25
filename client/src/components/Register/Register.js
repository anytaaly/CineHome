import React from "react";
import "./Register.css";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import classnames from "classnames";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    //we dont need to use .post(localhost:5000/api/users/register)
    //because we have set proxy in the package.json

    axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { errors } = this.state;
    //same as doing this = const = this.state of errors; destructuring of the errors

    return (
      <div className="landing">
        <div className="darkOverlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center box2">
                <div>
                  <img src={logo} id="icon-rotate" />
                </div>
                <h1 className="display-3 mb-4">Create your CineHome account</h1>
                <p className="lead"> Stream TV and Movies Live Online</p>
                <hr />
                <form noValidate onSubmit={this.onSubmit}>
                  {/* NAME FIELD  */}
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.name
                      })}
                      placeholder="Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                    {errors.name && (
                      <div className="invalidFeedback">
                        <span class="glyphicon glyphicon-remove-circle" />{" "}
                        Error: {errors.name}
                      </div>
                    )}
                  </div>
                  {/* EMAIL FIELD */}
                  <div className="form-group">
                    <input
                      type="email"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.email
                      })}
                      placeholder="Email Address"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    {errors.email && (
                      <div className="invalidFeedback">
                        <span class="glyphicon glyphicon-remove-circle" />{" "}
                        Error: {errors.email}
                      </div>
                    )}
                    <small className="form-text text-muted">
                      This site uses Gravatar so if you want a profile image,
                      use a Gravatar email
                    </small>
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.password
                      })}
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                    {errors.password && (
                      <div className="invalidFeedback">
                        <span class="glyphicon glyphicon-remove-circle" />{" "}
                        Error: {errors.password}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.password2
                      })}
                      placeholder="Confirm Password"
                      name="password2"
                      value={this.state.password2}
                      onChange={this.onChange}
                    />
                    {errors.password2 && (
                      <div className="invalidFeedback">
                        <span class="glyphicon glyphicon-remove-circle" />{" "}
                        Error: {errors.password2}
                      </div>
                    )}
                  </div>
                  <input type="submit" className="btn btn-block mt-4 button" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
