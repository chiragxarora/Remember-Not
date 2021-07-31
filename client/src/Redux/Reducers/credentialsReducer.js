const credentialReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_CREDENTIALS_SUCCESS":
      return action.payload;

    case "GET_CREDENTIALS_FAILED":
      return [-1];

    default:
      return state;
  }
};

export default credentialReducer;
