import React, { Fragment } from "react";
import styled from "styled-components";
import GlobalStyle from "src/style/global";
import Router from "src/components/router/index";

const Provider = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <Router />
      </Container>
    </Fragment>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  user-select: none;
`;

export default Provider;
