import React from "react";
import { connect } from "react-redux";
import Home from './Home';
import { trySignup } from "../Redux/Actions";

class Signup extends React.Component {
  state = {
    name: "",
    email: "",
    passCode: "",
    password: "",
    passwordConfirm: "",
  };

  onSubmitSignupForm = (e) => {
    e.preventDefault();
    this.props.trySignup(
      this.state.name,
      this.state.email,
      this.state.passCode,
      this.state.password,
      this.state.passwordConfirm
    );
  };

  componentDidMount() {}

  render() {
    if(this.props.auth.active) {
      return <Home />
    }
    return (
      <div>
        <form onSubmit={this.onSubmitSignupForm} className="ui form">
          <div className="field eight wide">
            <label>Name</label>
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              placeholder="John Doe"
            />
            <label>E-mail</label>
            <input
              type="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              placeholder="joe@schmoe.com"
            />
            <label>PassCode</label>
            <input
              type="password"
              value={this.state.passCode}
              onChange={(e) => this.setState({ passCode: e.target.value })}
              placeholder="***********"
            />
            <label>Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              placeholder="***********"
            />
            <label>Password Confirm</label>
            <input
              type="password"
              value={this.state.passwordConfirm}
              onChange={(e) => this.setState({ passwordConfirm: e.target.value })}
              placeholder="joe@schmoe.com"
            />
          </div>
          <button className="ui submit button">Sign Up</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { trySignup })(Signup);