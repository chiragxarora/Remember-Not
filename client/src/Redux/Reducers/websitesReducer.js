const websiteReducer = (state = [-1], action) => {
  switch (action.type) {
    case "GET_WEBSITES_SUCCESS":
      return action.payload;

    case "GET_CREDENTIALS_FAILED":
      return [-1];

    default:
      return state;
  }
};

export default websiteReducer;
