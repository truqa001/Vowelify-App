import React from "react";

import PropTypes from "prop-types";

import Card from "../../Card/Card";
import MUITypography from "@material-ui/core/Typography";
import MUIDivider from "@material-ui/core/Divider";

const Result = props => {
    return (
        <Card>
            <MUITypography variant="h5">Your Result</MUITypography>

            {/* result container */}
            <div className="mt-4">{props.children}</div>

            <MUIDivider/>
            <div className="form-group text-right mt-2">
                <button
                    className="btn btn-primary mt-3"
                    onClick={props.findAgainBtnClick}
                >
                    Find another word
                </button>
                <button
                    className="btn btn-orange ml-3 mt-3"
                    onClick={props.historyBtnClick}
                >
                    Go to History
                </button>
            </div>
        </Card>
    );
};

export default Result;

Result.propTypes = {
    children: PropTypes.any.isRequired,
    findAgainBtnClick: PropTypes.func.isRequired,
    historyBtnClick: PropTypes.func.isRequired
};
