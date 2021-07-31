import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { tryLogin } from "../Redux/Actions";

class Login extends React.Component {
  state = { email: "", password: "" };

  onSubmitLoginForm = (e) => {
    e.preventDefault();
    this.props.tryLogin(this.state.email, this.state.password);
  };

  componentDidMount() {
  }

  render() {
    console.log("rendered", this.props.auth);
    return (
      <div>
        <form onSubmit={this.onSubmitLoginForm} className="ui form">
          <div className="field eight wide">
            <label>E-mail</label>
            <input
              type="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              placeholder="joe@schmoe.com"
            />
            <label>Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              placeholder="***********"
            />
          </div>
          <button className="ui submit button">Login</button>
        </form>
        <div className="ui segment">
          New Here
          <Link to="/signup" className="ui button">
            Signup!
          </Link>
        </div>
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

export default connect(mapStateToProps, { tryLogin })(Login);
