import React from "react";
import "./Card.scss";
import PropTypes from "prop-types";

const Card = props => <div className="card">{props.children}</div>;

export default Card;

Card.propTypes = {
    children: PropTypes.any.isRequired
};
