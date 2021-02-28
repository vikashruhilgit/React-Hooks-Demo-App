import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import errorHandler from "../../shared/errorHandler";
import { getAlbums } from "../../store/actions/albumActions";
import Loader from "../../UI/loader/loader";

import classes from "./albums.module.scss";

const Albums = () => {
  const dispatch = useDispatch();

  const isloading = useSelector((state) => state.albumState.isloading);
  const albums = useSelector((state) => state.albumState.albums);

  const getAlbumsData = useCallback(() => dispatch(getAlbums()), [dispatch]);

  useEffect(() => {
    getAlbumsData();
  }, [getAlbumsData]);

  return (
    <div className={classes.Albums}>
      {isloading && (
        <div className={classes.Loader}>
          <Loader></Loader>
        </div>
      )}
      <ul>
        {albums
          ? albums.map((album) => {
              return <li key={album.id}>{album.title}</li>;
            })
          : null}
      </ul>
    </div>
  );
};

export default errorHandler(Albums);
