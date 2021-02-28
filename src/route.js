import React, { Suspense } from "react";
import { lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Posts = lazy(() => import("./components/posts/posts"));
const Todos = lazy(() => import("./components/todos/todos"));
const Albums = lazy(() => import("./components/albums/albums"));

const AppRoute = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/posts" component={Posts}></Route>
        <Route path="/todos" component={Todos}></Route>
        <Route path="/albums" component={Albums}></Route>
        {/* <Redirect from="/" to="/posts"></Redirect> */}
      </Switch>
    </Suspense>
  );
};

export default AppRoute;
