import React from "react";
import { Link } from "react-router-dom";
import './styles.css';
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
      <div className="ui centered container grid">
        <div className="nine wide column mt">
          <h2 className="ui teal image header">
            <img src="assets/images/logo.png" class="image" />
            <div className="content">Log-in to your account</div>
          </h2>
          <form onSubmit={this.onSubmitSignupForm} class="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                    placeholder="Name"
                  />
                </div>
              </div>
              <div class="field">
                <div class="ui left icon input">
                  <i class="envelope icon"></i>
                  <input
                    type="email"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                    placeholder="E-mail address"
                  />
                </div>
              </div>
              <div class="field">
                <div class="ui left icon input">
                  <i class="lock icon"></i>
                  <input
                    type="password"
                    value={this.state.passCode}
                    onChange={(e) => this.setState({ passCode: e.target.value })}
                    placeholder="PassCode"
                  />
                </div>
              </div>
              <div class="field">
                <div class="ui left icon input">
                  <i class="lock icon"></i>
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                    placeholder="Password"
                  />
                </div>
              </div>
              <div class="field">
                <div class="ui left icon input">
                  <i class="lock icon"></i>
                  <input
                    type="password"
                    value={this.state.passwordConfirm}
                    onChange={(e) => this.setState({ passwordConfirm: e.target.value })}
                    placeholder="Please confirm your password"
                  />
                </div>
              </div>
              <button class="ui fluid large teal submit button">Sign Up</button>
            </div>
            <div class="ui error message"></div>
          </form>
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

export default connect(mapStateToProps, { trySignup })(Signup);