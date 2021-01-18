import * as TYPES from "../types/user";

function usersReducer(state = null, action) {
  switch (action.type) {
    case TYPES.ADD_USER:
      return action.payload;
    case TYPES.DELETE_USER:
      return action.payload;
    default:
      return state;
  }
}

export default usersReducer;
