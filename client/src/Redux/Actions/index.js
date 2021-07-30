import { User } from "../../api";

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
