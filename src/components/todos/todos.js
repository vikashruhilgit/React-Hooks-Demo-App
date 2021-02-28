import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import errorHandler from "../../shared/errorHandler";
import { getTodos } from "../../store/actions/todoActions";
import Loader from "../../UI/loader/loader";

import classes from "./todos.module.scss";

const Todos = () => {
  const dispatch = useDispatch();

  const isloading = useSelector((state) => state.todoState.isloading);
  const todos = useSelector((state) => state.todoState.todos);

  const getTodosData = useCallback(() => dispatch(getTodos()), [dispatch]);

  useEffect(() => {
    getTodosData();
  }, [getTodosData]);

  return (
    <div className={classes.Todos}>
      {isloading && (
        <div className={classes.Loader}>
          <Loader></Loader>
        </div>
      )}
      <ul>
        {todos
          ? todos.map((todo) => {
              return <li key={todo.id}>{todo.title}</li>;
            })
          : null}
      </ul>
    </div>
  );
};

export default errorHandler(Todos);
