import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './styles.css';
import { connect } from "react-redux";
import { tryLogin, resetErrorMessge } from "../Redux/Actions";

const Login = ({ tryLogin, error, resetErrorMessge }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState(undefined);

  const onSubmitLoginForm = (e) => {
    e.preventDefault();
    console.log("Logging in...");
    setLocalError(undefined);
    tryLogin(email, password);
  };

  useEffect(() => {
    return () => {
      console.log("signup unmounting");
      setLocalError(undefined);
      resetErrorMessge();
    }
  }, []);

  useEffect(() => {
    console.log(error);
    setLocalError(error);
  }, [error,localError]);

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
        {localError!=undefined && (
          <div className="ui error message">
            <div className="header">Error</div>
            <p>{localError}</p>
          </div>
        )}

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
  error: state.errors.error
});

export default connect(mapStateToProps, { tryLogin, resetErrorMessge })(Login);
