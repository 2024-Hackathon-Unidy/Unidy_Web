import React, { Fragment } from "react";
import GlobalStyle from "src/style/global";
import PageTemplate from "src/components/common/pageTemplate";
import Router from "src/components/router/index";

const Provider = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <PageTemplate>
        <Router />
      </PageTemplate>
    </Fragment>
  );
};

export default Provider;
