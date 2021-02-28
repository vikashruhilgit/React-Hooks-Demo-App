import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import errorHandler from "../../shared/errorHandler";
import { getPosts } from "../../store/actions/postActions";
import Loader from "../../UI/loader/loader";

import classes from "./posts.module.scss";

const Posts = () => {
  const dispatch = useDispatch();

  const isloading = useSelector((state) => state.postState.isloading);
  const posts = useSelector((state) => state.postState.posts);

  const getPostsData = useCallback(() => dispatch(getPosts()), [dispatch]);

  useEffect(() => {
    getPostsData();
  }, [getPostsData]);

  return (
    <div className={classes.Posts}>
      {isloading && (
        <div className={classes.Loader}>
          <Loader></Loader>
        </div>
      )}
      <ul>
        {posts
          ? posts.map((post) => {
              return <li key={post.id}>{post.title}</li>;
            })
          : null}
      </ul>
    </div>
  );
};

export default errorHandler(Posts);
