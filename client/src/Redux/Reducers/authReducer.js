export const authReducer = (state = { active: false }, action) => {
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

    default:
      return state;
  }
};
