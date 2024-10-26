import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css';
import { connect } from "react-redux";
import { tryLogin } from "../Redux/Actions";

const Login = ({ tryLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitLoginForm = (e) => {
    e.preventDefault();
    console.log("Logging in...");
    tryLogin(email, password);
  };

  return (
    <div className="ui centered container grid">
      <div className="nine wide column mt">
        <h2 className="ui teal image header">
          <img src="assets/images/logo.png" className="image" alt="Logo" />
          <div className="content">Log-in to your account</div>
        </h2>
        <form onSubmit={onSubmitLoginForm} className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail address"
                  required
                />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <button className="ui fluid large teal submit button">Login</button>
          </div>
          <div className="ui error message"></div>
        </form>

        <div className="ui message centered grid">
          <div>
            New to us?{" "}
            <Link to="/signup" className="ui teal button">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { tryLogin })(Login);
