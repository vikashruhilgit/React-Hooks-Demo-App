import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import UserDropdown from "./userDropdown/user-dropdown";

import classes from "./navigation.module.scss";

const Navigation = React.memo(() => {
  const posts = useSelector((state) => state.postState.posts);
  const albums = useSelector((state) => state.albumState.albums);

  return (
    <div className={classes.NavWrapper}>
      <nav>
        <ul>
          <li>
            <NavLink to="/posts">Posts</NavLink>
            {posts && posts.length > 0 ? (
              <span className={classes.Badge}>
                <span>{posts.length}</span>
              </span>
            ) : null}
          </li>
          {posts && posts.length > 0 ? (
            <li>
              <NavLink to="/albums">Albums</NavLink>
              {albums && albums.length > 0 ? (
                <span className={classes.Badge}>
                  <span>{albums.length}</span>
                </span>
              ) : null}
            </li>
          ) : (
            <li className={classes.Readonly}>Albums</li>
          )}
        </ul>
      </nav>
      {albums && albums.length > 0 ? (
        <UserDropdown></UserDropdown>
      ) : (
        <span className={[classes.Readonly, classes.UserReadOnly].join(" ")}>
          User
        </span>
      )}
    </div>
  );
});

export default Navigation;
