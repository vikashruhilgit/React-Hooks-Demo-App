import axios from "../../shared/axios";
import * as actiontype from "./actionType";

const savePosts = (data) => ({
  type: actiontype.GETPOST,
  payload: { ...data },
});

export const getPosts = () => {
  return (dispatch) => {
    axios
      .get("/posts")
      .then((res) => {
        return dispatch(savePosts({ posts: res.data, isloading: false }));
      })
      .catch((err) => {
        //console.log(err);
      });
  };
};
