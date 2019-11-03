import React from "react";

import PropTypes from "prop-types";

import MUITextField from "@material-ui/core/TextField";
import MUITypography from "@material-ui/core/Typography";

import Card from "../../Card/Card";

const Form = props => {
    return (
        <Card>
            <form noValidate autoComplete="off">
                <MUITypography variant="h5">Find my Vowels</MUITypography>
                <div className="form-group">
                    <MUITextField
                        label="Enter a word"
                        margin="normal"
                        fullWidth
                        error={props.inputError}
                        helperText={props.inputHelperText}
                        onChange={props.inputOnChange}
                    />
                </div>
                <div className="form-group text-right">
                    <input
                        type="submit"
                        className="btn btn-success"
                        onClick={props.onSubmitClick}
                    />
                </div>
            </form>
        </Card>
    );
};

export default Form;

Form.propTypes = {
    inputError: PropTypes.bool.isRequired,
    inputHelperText: PropTypes.string,
    inputOnChange: PropTypes.func.isRequired,
    onSubmitClick: PropTypes.func.isRequired
}


