import axios from "../../shared/axios";
import * as actiontype from "./actionType";

const saveAlbums = (data) => ({
  type: actiontype.GETALBUM,
  payload: { ...data },
});

export const getAlbums = () => {
  return (dispatch) => {
    axios
      .get("/albums")
      .then((res) => {
        return dispatch(saveAlbums({ albums: res.data, isloading: false }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
