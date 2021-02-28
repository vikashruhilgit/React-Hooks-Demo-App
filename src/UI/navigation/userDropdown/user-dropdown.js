import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { getUsers } from "../../../store/actions/userActions";

import classes from "./user-dropdown.module.scss";

const UserDropdown = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.userState.users);
  const getUserData = () => dispatch(getUsers());

  const history = useHistory();

  const [state, setstate] = useState({
    openDropdown: false,
  });

  const handleClick = () => {
    users || getUserData(); //only when users not exist.
    setstate({
      openDropdown: !state.openDropdown,
    });
  };

  const dropDownClass = [classes.More];
  if (state.openDropdown) {
    dropDownClass.push(classes.DropdownOpen);
  }

  const handleTodos = () => {
    history.push("/todos");
    setstate({
      openDropdown: false,
    });
  };

  const userClick = () => {
    setstate({
      openDropdown: false,
    });
  };

  return (
    <div className={classes.Main}>
      <div className={dropDownClass.join(" ")}>
        <div onClick={handleClick} className={classes.Heading}>
          Users
          {users && users.length > 0 ? (
            <span className={classes.Badge}>
              <span>{users.length}</span>
            </span>
          ) : null}
        </div>
        <div className={classes.DropdownMain}>
          <ul>
            <li onClick={() => handleTodos()}>
              <p>Todos</p>
            </li>
            {users
              ? users.map((user, i) => {
                  return (
                    <li key={i} onClick={() => userClick()}>
                      <p>{user.name}</p>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
