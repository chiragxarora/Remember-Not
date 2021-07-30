export const authReducer = (state = { active: false }, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      let newState1 = { ...state };
      newState1.active = true;
      newState1.data = action.payload.data;
      return newState1;

    case "LOGIN_FAILED":
      return state;

    case "LOGOUT_SUCCESS":
      let newState2 = { ...state };
      newState2.active = false;
      newState2.data = undefined;
      return newState2;

    case "LOGOUT_FAILED":
      return state;

    default:
      return state;
  }
};
