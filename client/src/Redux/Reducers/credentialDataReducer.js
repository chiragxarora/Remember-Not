const credentialDataReducer = (
  state = { loginId: "xxxxxxxxxx", password: "xxxxxxxxxx", id: "na" },
  action
) => {
  switch (action.type) {
    case "GET_CREDENTIAL_DATA_SUCCESS":
      return {
        id: action.payload._id,
        loginId: action.payload.loginId,
        password: action.payload.password,
      };

    case "GET_CREDENTIAL_DATA_FAILED":
      return { loginId: "xxxxxxxxxx", password: "xxxxxxxxxx", id: "na" };

    case "UPDATE_CREDENTIAL_DATA_SUCCESS":
      return {
        id: action.payload._id,
        loginId: action.payload.loginId,
        password: action.payload.password,
      };

    case "UPDATE_CREDENTIAL_DATA_FAILED":
      return state;

    default:
      return state;
  }
};

export default credentialDataReducer;
