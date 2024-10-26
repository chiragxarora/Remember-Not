const errorReducer = (state = {error: undefined}, action) => {
    switch (action.type) {
      case "SIGNUP_ERROR_MESSAGE":
        let newState1 = { ...state };
        newState1.error = action.payload.data.message;
        return newState1;

      case "RESET_ERROR_MESSAGE":
        let newState2 = { ...state };
        newState2.error = undefined;
        console.log(newState2);
        return newState2;

      case "LOGIN_ERROR_MESSAGE":
        let newState3 = { ...state };
        newState3.error = action.payload.data.message;
        return newState3;
  
      default:
        return state;
    }
  };
  
  export default errorReducer;
  