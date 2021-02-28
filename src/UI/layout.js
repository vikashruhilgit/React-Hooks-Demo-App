import React from "react";
import Navigation from "./navigation/navigation";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navigation></Navigation>
      <div>{props.children}</div>
    </React.Fragment>
  );
};

export default Layout;
