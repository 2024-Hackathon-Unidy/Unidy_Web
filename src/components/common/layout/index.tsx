import React, { Fragment } from "react";
import { ProviderProps } from "src/components/common/provider/type";

const Layout = ({ children }: ProviderProps) => {
    return <Fragment>{children}</Fragment>
}

export default Layout;