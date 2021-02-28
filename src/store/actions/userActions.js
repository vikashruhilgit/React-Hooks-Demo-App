import axios from "../../shared/axios";
import * as actiontype from "./actionType";

const saveUsers = (data) => ({
  type: actiontype.GETUSERS,
  payload: { ...data },
});

export const getUsers = () => {
  return (dispatch) => {
    axios
      .get("/users")
      .then((res) => {
        return dispatch(saveUsers({ users: res.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
