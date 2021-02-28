import axios from "../../shared/axios";
import * as actiontype from "./actionType";

const saveTodos = (data) => ({
  type: actiontype.GETTODOS,
  payload: { ...data },
});

export const getTodos = () => {
  return (dispatch) => {
    axios
      .get("/todos")
      .then((res) => {
        return dispatch(saveTodos({ todos: res.data, isloading: false }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
