import React from "react";
import { Link } from "react-router-dom";
import './styles.css';
import { connect } from "react-redux";
import { tryLogin } from "../Redux/Actions";

class Login extends React.Component {
  state = { email: "", password: "" };

  onSubmitLoginForm = (e) => {
    e.preventDefault();
    console.log("idhar");
    this.props.tryLogin(this.state.email, this.state.password);
  };

  render() {
    return (
      <div class="ui centered container grid">
        <div class="nine wide column mt">
          <h2 class="ui teal image header">
            <img src="assets/images/logo.png" class="image" />
            <div class="content">Log-in to your account</div>
          </h2>
          <form onSubmit={this.onSubmitLoginForm} class="ui large form">
            <div class="ui stacked segment">
              <div class="field">
                <div class="ui left icon input">
                  <i class="user icon"></i>
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
                    value={this.state.password}
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                    placeholder="Password"
                  />
                </div>
              </div>
              <button class="ui fluid large teal submit button">Login</button>
            </div>

            <div class="ui error message"></div>
          </form>

          <div class="ui message centered grid">
            <div>
              New to us?{" "}
              <Link to="/signup" className="ui teal button">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>

      // <div>
      //   <form  className="ui form">
      //     <div className="field eight wide">
      //       <label>E-mail</label>
      //       <input
      //
      //
      //
      //         placeholder="joe@schmoe.com"
      //       />
      //       <label>Password</label>
      //       <input
      //
      //
      //
      //         placeholder="***********"
      //       />
      //     </div>
      //     <button className="ui submit button">Login</button>
      //   </form>
      //   <div className="ui segment">
      //     New Here
      //
      //       Signup!
      //     </Link>
      //   </div>
      // </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { tryLogin })(Login);
