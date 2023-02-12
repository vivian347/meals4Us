import React from "react";
import { render } from "react-dom";

const App = () => {
    return (
        <h1>Testing React app</h1>
    );
};

const appDiv = document.getElementById("app");
render(<App />, appDiv)