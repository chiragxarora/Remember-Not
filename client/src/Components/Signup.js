import React, { useState, useEffect } from "react";
import './styles.css';
import { connect } from "react-redux";
import Home from './Home';
import { trySignup, resetErrorMessge } from "../Redux/Actions";

const Signup = ({ auth, trySignup, error, resetErrorMessge }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passCode, setPassCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [localError, setLocalError] = useState(undefined);

  const onSubmitSignupForm = (e) => {
    e.preventDefault();
    setLocalError(undefined);
    trySignup(name, email, passCode, password, passwordConfirm);
  };

  useEffect(() => {
    return () => {
      console.log("signup unmounting");
      setLocalError(undefined);
      resetErrorMessge();
    }
  }, [resetErrorMessge]);

  useEffect(() => {
    console.log(error);
    setLocalError(error);
  }, [error,localError]);

  if (auth.active) {
    return <Home />;
  }

  return (
    <div className="ui centered container grid">
      <div className="nine wide column mt">
        <h2 className="ui teal image header">
          <img src="assets/images/logo.png" className="image" alt="Logo" />
          <div className="content">Log-in to your account</div>
        </h2>
        <form onSubmit={onSubmitSignupForm} className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="envelope icon"></i>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail address"
                />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input
                  type="password"
                  value={passCode}
                  onChange={(e) => setPassCode(e.target.value)}
                  placeholder="PassCode"
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
                />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input
                  type="password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  placeholder="Please confirm your password"
                />
              </div>
            </div>
            <button className="ui fluid large teal submit button">Sign Up</button>
          </div>
          <div className="ui error message"></div>
        </form>
        {localError!==undefined && (
          <div className="ui error message">
            <div className="header">Error</div>
            <p>{localError}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.errors.error
});

export default connect(mapStateToProps, { trySignup, resetErrorMessge })(Signup);
