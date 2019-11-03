import React from "react";
import "./Header.scss";

import MUIAppBar from "@material-ui/core/AppBar";
import MUIToolbar from "@material-ui/core/Toolbar";
import MUITypography from "@material-ui/core/Typography";

const Header = () => {
    return (
        <MUIAppBar className="app-bar" position="relative">
            <MUIToolbar>
                <MUITypography className="logo" variant="h5">
                    <span>V</span>owelify
                </MUITypography>
            </MUIToolbar>
        </MUIAppBar>
    );
};

export default Header;
