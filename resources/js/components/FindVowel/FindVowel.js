import React, { useState } from "react";

import axios from "axios";
import { withRouter } from "react-router-dom";

import Form from "./Form/Form";
import Result from "./Result/Result";
import Spinner from "../Spinner/Spinner";


const FindVowel = props => {
    const [inputVal, setInputVal] = useState(null);
    const [error, setError] = useState(false);
    const [errorMess, setErrorMess] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const onChangeHandler = ({ target }) => {
        setInputVal(target.value);
    };

    const onSubmitHandler = e => {
        e.preventDefault();

        validateInput();
    };

    const validateInput = () => {
        if (inputVal === null || inputVal === "") {
            setError(true);
            setErrorMess("This field is required");
            return;
        }
        if (inputVal.includes(" ")) {
            setError(true);
            setErrorMess("Please enter only one word");
        } else {
            const data = { word: inputVal };
            submitData(data);

            setError(false);
        }
    };

    const submitData = data => {
        setLoading(true);

        axios
            .post("http://localhost:8000/find", data)
            .then(response => {
                setLoading(false);
                setResult(response.data);
            })
            .catch(e => console.log(e));
    };

    const findAgainHandler = () => {
        setInputVal(null);
        setError(false);
        setErrorMess(null);
        setLoading(false);
        setResult(null);
    };

    //define component render conditions
    let find_vowel_component = <Spinner />;

    if (!loading && !result) {
        // form haven't submited, initial stage
        find_vowel_component = (
            <Form
                inputError={error}
                inputHelperText={error ? errorMess : null}
                inputOnChange={onChangeHandler.bind(this)}
                onSubmitClick={onSubmitHandler.bind(this)}
            />
        );
    } else if (!loading && result) {
        //form submited and got result
        find_vowel_component = (
            <Result
                findAgainBtnClick={findAgainHandler}
                // eslint-disable-next-line react/prop-types
                historyBtnClick={() => props.history.push("/history")}
            >
                <p className="font-italic">
                    Vowels count: {result.vowels_count}
                </p>
                <p style={{ fontSize: "25px" }}>
                    {result.chars_array.map((char, index) => (
                        <span
                            key={index}
                            className={
                                result.vowels_index.includes(index)
                                    ? "is-vowel"
                                    : null
                            }
                        >
                            {char}
                        </span>
                    ))}
                </p>
            </Result>
        );
    }
    return <>{find_vowel_component}</>;
};

export default withRouter(FindVowel);
