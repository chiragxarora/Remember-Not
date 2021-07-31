import { User, Credential } from "../../api";

export const trySignup = (name, email, passCode, password, passwordConfirm) => {
  return async (dispatch) => {
    try {
      const response = await User.post(
        "/signup",
        {
          name,
          email,
          passCode,
          password,
          passwordConfirm
        },
        {
          withCredentials: true,
        }
      );
      dispatch({
        type: "SIGNUP_SUCCESS",
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: "SIGNUP_FAILED",
        payload: err.response.data,
      });
    }
  };
};

export const tryLogin = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await User.post(
        "/login",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: "LOGIN_FAILED",
        payload: err.response.data,
      });
    }
  };
};

export const tryLogout = () => {
  return async (dispatch) => {
    try {
      const response = await User.get("/logout", {
        withCredentials: true,
      });
      dispatch({
        type: "LOGOUT_SUCCESS",
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: "LOGOUT_FAILED",
        payload: err.response.data,
      });
    }
  };
};

export const getCredentials = () => {
  return async (dispatch) => {
    try {
      const response = await User.get("/mycredentials", {
        withCredentials: true,
      });
      console.log(response)
      dispatch({
        type: "GET_CREDENTIALS_SUCCESS",
        payload: response.data.data.myCredentials,
      });
    } catch (err) {
      console.log(err)
      dispatch({
        type: "GET_CREDENTIALS_FAILED",
        payload: err.response.data,
      });
    }
  };
}

export const getCredentialData = (id) => {
  return async (dispatch) => {
    try {
      const response = await Credential.get(`${id}`, {
        withCredentials: true,
      });
      console.log(response.data)
      dispatch({
        type: "GET_CREDENTIAL_DATA_SUCCESS",
        payload: response.data.data.credential,
      });
    } catch (err) {
      console.log(err)
      dispatch({
        type: "GET_CREDENTIAL_DATA_FAILED",
        payload: err.response.data,
      });
    }
  };
}
