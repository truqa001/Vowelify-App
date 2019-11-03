import React, { Component } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import FindVowel from "./components/FindVowel/FindVowel";

import History from "./components/History/History";

export default class Root extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Route exact path="/" component={FindVowel} />
                    <Route exact path="/history" component={History} />
                </Layout>
            </Router>
        );
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(<Root />, document.getElementById("root"));
}
