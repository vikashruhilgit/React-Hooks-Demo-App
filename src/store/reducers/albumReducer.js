import * as actionType from "../actions/actionType";

const initialState = {
  albums: null,
  isloading: true,
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GETALBUM:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default albumReducer;
