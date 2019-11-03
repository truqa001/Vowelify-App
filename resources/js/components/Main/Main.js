import React from "react";
import "./Main.scss";

import PropTypes from "prop-types"

const Main = (props) => {
    return (
        <main>
            {props.children}
        </main>
    );
};

export default Main;

Main.propTypes = {
    children: PropTypes.any.isRequired
}
