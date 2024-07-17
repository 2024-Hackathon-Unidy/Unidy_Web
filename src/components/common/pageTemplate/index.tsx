import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { ProviderProps } from "src/components/common/provider/type";
import Topbar from "src/components/common/topbar/index";
import Layout from "src/components/common/layout/index";
import Bottombar from "src/components/common/bottombar/index";

const PageTemplate = ({ children }: ProviderProps) => {
  const { pathname } = useLocation();

  return (
    <Container>
      {pathname !== "/login" && pathname !== "/sign-up" && <Topbar />}
      <Layout>{children}</Layout>
      {pathname !== "/login" &&
        pathname !== "/sign-up" &&
        pathname !== "/company" &&
        pathname !== "/rest" &&
        pathname !== "/advertise" &&
        pathname !== "/utilization" &&
        pathname !== "/personal-info" &&
        pathname !== "/protect-policy" &&
        pathname !== "/cultural-festival" &&
        pathname !== "/language-education" &&
        pathname !== "/policy-support" && <Bottombar />}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  user-select: none;
  overflow-y: auto;
`;

export default PageTemplate;
