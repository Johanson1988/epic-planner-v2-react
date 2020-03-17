import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { withAuth } from "../lib/AuthProvider";
// import Footer from "../components/Footer";

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({
      username,
      password
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1> Login </h1>{" "}
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label> Email: </label>{" "}
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />{" "}
          </div>{" "}
          <div>
            <label> Password: </label>{" "}
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="Login" />
        </form>
        <p> Don't have an account?</p>
        <Link to={"/signup"}>Signup </Link>
      </div>
    );
  }
}
