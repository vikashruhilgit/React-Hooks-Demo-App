import * as actionType from "../actions/actionType";

const initialState = {
  users: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GETUSERS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
