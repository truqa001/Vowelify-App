import React from "react";
import "./Layout.scss";

import PropTypes from "prop-types";

import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";

const Layout = props => (
    <>
        <Header />
        <div className="wrapper">
            <Main>{props.children}</Main>
            <Navigation />
        </div>
    </>
);

export default Layout;

Layout.propTypes = {
    children: PropTypes.any.isRequired
};
