import React from "react";
import Layout from "./UI/layout";
import AppRoute from "./route";

import classes from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Layout>
          <div className={classes.Wrapper}>
            <AppRoute></AppRoute>
            <div>Welcome To This Demo.</div>
          </div>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
