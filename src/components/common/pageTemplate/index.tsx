import React from "react";
import styled from "styled-components";
import {useLocation} from "react-router-dom";
import { ProviderProps } from "src/components/common/provider/type";
import Topbar from "src/components/common/topbar/index";
import Layout from "src/components/common/layout/index";

const PageTemplate = ({children}: ProviderProps) => {
    const { pathname } = useLocation();

    return (
        <Container>
            {pathname !== "/sign-up" && <Topbar />}
            <Layout>{children}</Layout>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    user-select: none;
`

export default PageTemplate;