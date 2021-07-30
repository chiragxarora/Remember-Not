import axios from "axios";

export const tryLogin = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/users/login",
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
    } catch(err) {
      dispatch({
        type: "LOGIN_FAILED",
        payload: err.response.data
      });
    }
    
  };
};
