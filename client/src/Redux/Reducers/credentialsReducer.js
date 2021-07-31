const credentialReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_CREDENTIALS_SUCCESS":
      return action.payload;

    case "GET_CREDENTIALS_FAILED":
      return [-1];

      case "DELETE_CREDENTIAL_DATA_SUCCESS":
        return state.filter(s => s._id !== action.payload.id);
      case "DELETE_CREDENTIAL_DATA_FAILED":
        return state
    default:
      return state;
  }
};

export default credentialReducer;
