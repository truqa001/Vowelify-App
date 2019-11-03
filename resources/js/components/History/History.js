import React, { useState, useEffect } from "react";

import axios from "axios";

import MUITypography from "@material-ui/core/Typography";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";

const History = () => {
    const [histories, setHistories] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:8000/fetch-history")
            .then(response => {
                setHistories(response.data);
                setLoading(false);
            })
            .catch(e => console.log(e));
    }, []);

    let history_row = null;

    //render each word into a row
    if (!loading && histories) {
        history_row = histories.map((word, index) => (
            <tr key={index}>
                {/* append each character in a word with prominence at vowels */}
                <th>
                    {JSON.parse(word.chars_array).map((char, char_index) => (
                        <span
                            key={char_index}
                            className={
                                word.vowels_index.includes(char_index)
                                    ? "is-vowel"
                                    : null
                            }
                        >
                            {char}
                        </span>
                    ))}
                </th>
                <th>{word.vowels_count}</th>
                <th>{word.created_at}</th>
            </tr>
        ));
    }

    return (
        <Card>
            <MUITypography variant="h5">History</MUITypography>

            {loading ? (
                <Spinner />
            ) : (
                <div style={{overflow:"auto"}}>
                <table className="table mt-4 table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Words</th>
                            <th scope="col">Vowels Count</th>
                            <th scope="col">Date/Time</th>
                        </tr>
                    </thead>
                    <tbody>{history_row}</tbody>
                </table>
                </div>
            )}
        </Card>
    );
};

export default History;
