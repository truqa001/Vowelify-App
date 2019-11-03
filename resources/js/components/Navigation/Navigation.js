import React from "react";
import "./Navigation.scss";

import { NavLink } from "react-router-dom";

import MUIHistoryIcon from "@material-ui/icons/History";
import MUISearchIcon from "@material-ui/icons/Search";

const Navigation = () => {
    return (
        <nav>
            <div className="form-group position-relative">
                <NavLink exact to="/">
                    <button className="btn btn-primary">
                        <MUISearchIcon />
                    </button>
                    Find My Vowels
                </NavLink>
            </div>

            <div className="form-group position-relative">
                <NavLink exact to="/history">
                    <button className="btn btn-orange">
                        <MUIHistoryIcon />
                    </button>
                    History
                </NavLink>
            </div>
        </nav>
    );
};

export default Navigation;
