const authReducer = (state = { active: false }, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      let newState1 = { ...state };
      newState1.active = true;
      newState1.data = action.payload.data;
      return newState1;

    case "SIGNUP_FAILED":
      return state;

    case "LOGIN_SUCCESS":
      let newState2 = { ...state };
      newState2.active = true;
      newState2.data = action.payload.data;
      return newState2;

    case "LOGIN_FAILED":
      return state;

    case "LOGOUT_SUCCESS":
      let newState3 = { ...state };
      newState3.active = false;
      newState3.data = undefined;
      return newState3;

    case "LOGOUT_FAILED":
      return state;

    case "UPDATE_PASSWORD_SUCCESS":
      return state; // user's account password not needed on app's state
    case "UPDATE_PASSWORD_FAILED":
      return state;
    case "UPDATE_ME_SUCCESS":
      let newState4 = { ...state };
      newState4.active = true;
      newState4.data = action.payload.data;
      return newState4;
    case "UPDATE_ME_FAILED":
      return state;

    default:
      return state;
  }
};

export default authReducer;
