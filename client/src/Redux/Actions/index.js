import { User, Credential, Website } from "../../api";

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
          passwordConfirm,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      dispatch({
        type: "SIGNUP_SUCCESS",
        payload: response.data,
      });
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: "SIGNUP_ERROR_MESSAGE",
        payload: err.response,
      });
    }
  };
};

export const resetErrorMessge = () => {
  console.log("will try to remove err msg");
  return async (dispatch) => {
    console.log("dispatching reset signup err msg");
    dispatch({type: "RESET_ERROR_MESSAGE", payload: {}});
  }
}

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
      console.log(response.data);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data,
      });
    } catch (err) {
      console.log(err.response.data);
      dispatch({
        type: "LOGIN_ERROR_MESSAGE",
        payload: err.response,
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
      console.log(response.data);
      dispatch({
        type: "LOGOUT_SUCCESS",
        payload: response.data,
      });
    } catch (err) {
      console.log(err.response.data);
      dispatch({
        type: "LOGOUT_FAILED",
        payload: err.response.data,
      });
    }
  };
};

export const validateMe = (passCode) => {
  return async (dispatch) => {
    try {
      const response = await User.get(`/validateme/${passCode}`, {
        withCredentials: true
      });
      console.log(response.data);
      dispatch({
        type: "VALIDATE_ME_SUCCESS",
        payload: response.data,
      });
    } catch (err) {
      console.log(err.response.data);
        dispatch({
          type: "VALIDATE_ME_FAILED",
          payload: err.response.data,
        });
    }
  }
}

export const getCredentials = () => {
  return async (dispatch) => {
    try {
      const response = await User.get("/mycredentials", {
        withCredentials: true,
      });
      console.log(response.data);
      dispatch({
        type: "GET_CREDENTIALS_SUCCESS",
        payload: response.data.data.myCredentials,
      });
    } catch (err) {
      console.log(err.response.data);
      dispatch({
        type: "GET_CREDENTIALS_FAILED",
        payload: err.response.data,
      });
    }
  };
};

export const getCredentialData = (id) => {
  return async (dispatch) => {
    try {
      const response = await Credential.get(`${id}`, {
        withCredentials: true,
      });
      console.log(response.data);
      dispatch({
        type: "GET_CREDENTIAL_DATA_SUCCESS",
        payload: response.data.data.credential,
      });
    } catch (err) {
      console.log(err.response.data);
      dispatch({
        type: "GET_CREDENTIAL_DATA_FAILED",
        payload: err.response.data,
      });
    }
  };
};

export const updateCredentialData = (id, updateBody) => {
  return async (dispatch) => {
    try {
      const response = await Credential.patch(`${id}`, updateBody, {
        withCredentials: true,
      });
      console.log(response.data);
      dispatch({
        type: "UPDATE_CREDENTIAL_DATA_SUCCESS",
        payload: response.data.data.updatedCredential,
      });
    } catch (err) {
      console.log(err.response.data);
      dispatch({
        type: "UPDATE_CREDENTIAL_DATA_FAILED",
        payload: err.response.data,
      });
    }
  };
};

export const deleteCredentialData = (id) => {
  return async (dispatch) => {
    try {
      const response = await Credential.delete(`${id}`, {
        withCredentials: true,
      });
      console.log(response.data);
      dispatch({
        type: "DELETE_CREDENTIAL_DATA_SUCCESS",
        payload: { id },
      });
    } catch (err) {
      console.log(err.response.data);
      dispatch({
        type: "DELETE_CREDENTIAL_DATA_FAILED",
        payload: err.response.data,
      });
    }
  };
};

export const getWebsites = () => {
  return async (dispatch) => {
    try {
      const response = await Website.get("/", {
        withCredentials: true,
      });
      console.log(response.data);
      dispatch({
        type: "GET_WEBSITES_SUCCESS",
        payload: response.data,
      });
    } catch (err) {
      console.log(err.response.data);
      dispatch({
        type: "GET_WEBSITES_FAILED",
        payload: err.response.data,
      });
    }
  };
};

export const addCredential = (loginId, password, websiteId) => {
  console.log(websiteId);
  return async (dispatch) => {
    try {
      const response = await Credential.post(
        "/",
        {
          loginId,
          password,
          websiteId,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      dispatch({
        type: "ADD_CREDENTIAL_SUCCESS",
        payload: response.data,
      });
    } catch (err) {
      console.log(err.response.data);
      dispatch({
        type: "ADD_CREDENTIAL_FAILED",
        payload: err.response.data,
      });
    }
  };
};

export const updateMyPassword = (updateBody) => {
  return async (dispatch) => {
    try {
      const response = await User.patch('updatepassword', updateBody, {
        withCredentials: true,
      });
      console.log(response.data);
      dispatch({
        type: "UPDATE_PASSWORD_SUCCESS",
        payload: response.data,
      });
    } catch (err) {
      console.log(err.response.data);
      dispatch({
        type: "UPDATE_PASSWORD_FAILED",
        payload: err.response.data,
      });
    }
  };
};

export const updateMe = (updateBody) => {
  return async (dispatch) => {
    try {
      const response = await User.patch('updateme', updateBody, {
        withCredentials: true,
      });
      console.log(response.data);
      dispatch({
        type: "UPDATE_ME_SUCCESS",
        payload: response.data,
      });
    } catch (err) {
      console.log(err.response.data);
      dispatch({
        type: "UPDATE_ME_FAILED",
        payload: err.response.data,
      });
    }
  };
};
