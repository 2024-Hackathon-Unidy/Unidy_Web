import React, { Fragment } from "react";
import GlobalStyle from "src/style/global";
import Router from "src/components/router/index";

const Provider = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Router />
    </Fragment>
  );
};

export default Provider;
