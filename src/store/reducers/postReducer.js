import * as actionType from "../actions/actionType";

const initialState = {
  posts: null,
  isloading: true,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GETPOST:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
