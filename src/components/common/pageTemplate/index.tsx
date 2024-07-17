import React from "react";
import styled from "styled-components";
import { ProviderProps } from "src/components/common/provider/type";
import {useLocation} from "react-router-dom";
import Layout from "src/components/common/layout";

const PageTemplate = ({children}: ProviderProps) => {
    const { pathname } = useLocation();

    return (
        <Container>
            {/* {pathname !== "/login" && <Sidebar />} */}
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