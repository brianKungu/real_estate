export const actionType = {
  SET_PROPERTIES: "SET_PROPERTIES",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_PROPERTIES:
      return {
        ...state,
        properties: action.properties,
      };
    default:
      return state;
  }
};

export default reducer;
