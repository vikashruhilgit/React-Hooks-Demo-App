import * as actionType from "../actions/actionType";

const initialState = {
  todos: null,
  isloading: true,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GETTODOS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
