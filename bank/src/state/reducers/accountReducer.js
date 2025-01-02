
const initialState = 0;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    case "bankrupt":
      return 0;
    default:
      return state;
  }
};

export default reducer;
